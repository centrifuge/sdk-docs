const fs = require('fs/promises')
const path = require('path')
const fsExtra = require('fs-extra')

/**
 * Recursively gets all files from a directory
 */
async function getFilesRecursively(dir) {
  const items = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    items.map(async (item) => {
      const filePath = path.join(dir, item.name)
      return item.isDirectory() ? getFilesRecursively(filePath) : filePath
    })
  )
  return files.flat()
}

/**
 * Cleans generated documentation folders: classes and type-aliases
 */
async function cleanGeneratedDocs(targetDir) {
  const foldersToClean = ['classes', 'type-aliases']
  for (const folder of foldersToClean) {
    const folderPath = path.join(targetDir, folder)
    try {
      await fsExtra.remove(folderPath)
      console.log(`✨ Cleared existing ${folder} folder`)
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error(`❌ Error clearing ${folder} folder:`, error)
      }
    }
  }
}

/**
 * Copies documentation files while maintaining structure
 */
async function copyDocs(sourceDir, targetDir) {
  try {
    await fsExtra.ensureDir(targetDir)
    await cleanGeneratedDocs(targetDir)

    const docFiles = await getFilesRecursively(sourceDir)
    for (const file of docFiles) {
      const relativePath = path.relative(sourceDir, file)
      if (path.basename(file) === 'README.md') continue

      const targetPath = path.join(targetDir, relativePath)
      await fsExtra.ensureDir(path.dirname(targetPath))
      await fsExtra.copy(file, targetPath)
      console.log(`📄 Copied: ${relativePath}`)
    }
  } catch (error) {
    console.error('❌ Error copying docs:', error)
    throw error
  }
}

/**
 * Processes and updates the index.html.md file
 */
async function updateIndexHtmlMd(docsDir, indexHtmlMdPath) {
  try {
    const content = await fs.readFile(indexHtmlMdPath, 'utf8')
    const docFiles = await getFilesRecursively(docsDir)

    // Transform and validate files
    const actualFiles = new Set(
      docFiles.map((file) => path.relative(docsDir, file).replace(/\/_/g, '/').replace(/^_/, '').replace(/\.md$/, ''))
    )

    // Extract existing includes
    const existingIncludesMatch = content.match(/^includes:\n((?:  - .*\n)*)/m)
    const existingIncludes = existingIncludesMatch
      ? existingIncludesMatch[1]
          .split('\n')
          .map((line) => line.replace('  - ', ''))
          .filter(Boolean)
      : []

    // Process new includes
    const newIncludes = docFiles
      .filter((file) => file.endsWith('.md'))
      .filter((file) => !file.includes('README.md'))
      .map((file) => {
        const relativePath = path.relative(docsDir, file)
        return relativePath.replace(/\/_/g, '/').replace(/^_/, '').replace(/\.md$/, '')
      })

    // Combine and validate includes
    const allIncludes = [
      ...existingIncludes.filter((inc) => !inc.startsWith('classes/') && !inc.startsWith('type-aliases/')),
      ...newIncludes,
    ]
      .filter((value, index, self) => self.indexOf(value) === index)
      .filter((include) => {
        if (include.startsWith('classes/') || include.startsWith('type-aliases/')) {
          const exists = actualFiles.has(include)
          if (!exists) console.log(`⚠️  Warning: File not found for include: ${include}`)
          return exists
        }
        return true
      })

    // Update content
    const [frontmatterStart, ...rest] = content.split(/^includes:/m)
    const remainingContent = rest.join('includes:').split('---')
    const postFrontmatter = remainingContent.slice(1).join('---')

    const updatedContent = `${frontmatterStart}includes:
${allIncludes.map((file) => `  - ${file}`).join('\n')}
search: true
---${postFrontmatter}`

    await fs.writeFile(indexHtmlMdPath, updatedContent)
    console.log(`✅ Total includes: ${allIncludes.length}`)
  } catch (error) {
    console.error('❌ Error updating index.html.md:', error)
    throw error
  }
}

async function main() {
  try {
    await copyDocs('./docs', './source/includes')
    await updateIndexHtmlMd('./docs', './source/index.html.md')
    console.log('✅ Successfully updated documentation')
  } catch (error) {
    console.error('❌ Failed to process docs:', error)
    process.exit(1)
  }
}

main()
