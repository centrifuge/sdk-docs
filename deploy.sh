#!/usr/bin/env bash
set -o errexit #abort if any command fails
me=$(basename "$0")

help_message="\
Usage: $me [-c FILE] [<options>]
Build files for Cloudflare Pages deployment.

Options:

  -h, --help               Show this help information.
  -v, --verbose            Increase verbosity. Useful for debugging.
"

run_build() {
  echo "Installing dependencies..."
  bundle install

  echo "Building site..."
  bundle exec middleman build

  # Create necessary files for Cloudflare Pages
  echo "Creating Cloudflare Pages configuration files..."
  
  # Create _headers file if it doesn't exist
  if [ ! -f "build/_headers" ]; then
    cat > build/_headers << EOL
/*
  Cache-Control: public, max-age=3600
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
EOL
  fi

  # Create _redirects file if it doesn't exist
  if [ ! -f "build/_redirects" ]; then
    cat > build/_redirects << EOL
/* /index.html 200
EOL
  fi

  echo "Build completed! The 'build' directory is ready for Cloudflare Pages deployment."
}

parse_args() {
  # Set args from a local environment file.
  if [ -e ".env" ]; then
    source .env
  fi

  # Parse arg flags
  while : ; do
    if [[ $1 = "-h" || $1 = "--help" ]]; then
      echo "$help_message"
      exit 0
    elif [[ $1 = "-v" || $1 = "--verbose" ]]; then
      verbose=true
      shift
    else
      break
    fi
  done
}

# Echo expanded commands as they are executed (for debugging)
enable_expanded_output() {
  if [ $verbose ]; then
    set -o xtrace
    set +o verbose
  fi
}

parse_args "$@"
enable_expanded_output
run_build
