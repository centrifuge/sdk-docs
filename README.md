---
title: Centrifuge SDK Documentation
---

<p align="center">This is the official documentation for the Centrifuge SDK, helping developers integrate with the Centrifuge protocol quickly and easily.</p>

<p align="center"><img src="https://raw.githubusercontent.com/slatedocs/img/main/screenshot-slate.png" width=700 alt="Screenshot of Example Documentation created with Slate"></p>

<p align="center"><em>The example above was created with Slate. Check it out at <a href="https://slatedocs.github.io/slate">slatedocs.github.io/slate</a>.</em></p>

# Centrifuge SDK Documentation

The **Centrifuge SDK Documentation** provides detailed information on how to interact with the Centrifuge protocol, including methods for managing pools, assets, and investor interactions. It is generated using **Slate**, an API documentation generator that makes creating intelligent and responsive documentation easy.

## Features

* **Clean, intuitive design** — The Centrifuge SDK documentation follows a clean design where the description of the API is on the left, and the relevant code examples are on the right.
* **Everything on a single page** — The entire documentation is presented on a single page, making it easy for users to navigate without getting lost among multiple pages.
* **Markdown-Based** — The documentation is written in **Markdown**, which makes it easy to maintain, edit, and expand.
* **Code Samples in Multiple Languages** — The SDK supports multiple programming languages, and this documentation includes tabs for different code examples.
* **Out-of-the-box syntax highlighting** — Over 100 programming languages are supported for syntax highlighting, making it easy for developers to follow along.
* **Automatic table of contents** — The documentation includes an auto-generated table of contents on the left, which updates smoothly as users scroll through the page.

# Running the Documentation

This documentation is generated using **Slate**, and you have three different ways to run it.

## 1. Running Slate Natively

You can run **Slate** natively on your local machine if you have Ruby installed. Follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/centrifuge/sdk-docs.git
    cd sdk-docs
    ```

2. Install the dependencies:

    ```bash
    bundle install
    ```

3. Run the documentation:

    ```bash
    bundle exec middleman server
    ```

4. Visit `http://localhost:4567` to see your documentation live.

For more details, check out the [Using Slate Natively](https://github.com/slatedocs/slate/wiki/Using-Slate-Natively) section on the Slate wiki.

## 2. Using Vagrant

If you prefer to run **Slate** in a virtualized environment using Vagrant, follow these steps:

1. Install Vagrant and VirtualBox.
2. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/centrifuge-sdk-docs.git
    cd centrifuge-sdk-docs
    ```

3. Run Vagrant:

    ```bash
    vagrant up
    vagrant ssh
    ```

4. Run the server:

    ```bash
    bundle exec middleman server
    ```

Refer to the [Using Slate in Vagrant](https://github.com/slatedocs/slate/wiki/Using-Slate-in-Vagrant) for detailed instructions.

## 3. Using Docker

**Slate** also supports running with Docker, which makes setting up the environment extremely simple:

1. Install Docker.
2. Run the following command to start the documentation server:

    ```bash
    docker run --rm -p 4567:4567 -v $(pwd):/srv/slate slatedocs/slate serve
    ```

3. Visit `http://localhost:4567` to see your documentation live.

For more details, check out the [Using Slate in Docker](https://github.com/slatedocs/slate/wiki/Using-Slate-in-Docker).

# Centrifuge SDK Overview

The Centrifuge SDK allows developers to manage various components of the Centrifuge protocol. Here’s what you can do:

- **Pools**: Interact with and manage liquidity pools.
- **Assets**: View and manage the assets contained in pools.
- **Investors**: Manage investor interactions, including investing, redeeming, and checking positions.

# Contributing to the Documentation

We welcome contributions to improve the Centrifuge SDK documentation. To contribute:

1. Fork the repository on GitHub.
2. Make your changes and commit them to your fork.
3. Submit a pull request to the main repository for review.

# Contributors

This documentation was built using **Slate**. Slate was originally created by [Robert Lord](https://lord.io) at [TripIt](https://www.tripit.com/) and is now maintained by [Matthew Peveler](https://github.com/MasterOdin) and [Mike Ralphson](https://github.com/MikeRalphson).

Special thanks to all the contributors who help maintain and improve Slate.

# Questions? Need Help?

If you have any questions or need help with this documentation, please feel free to:

- **[Start a thread in our Discussions tab](https://github.com/yourusername/centrifuge-sdk-docs/discussions)**
- **[Submit an issue](https://github.com/yourusername/centrifuge-sdk-docs/issues)** if you encounter any bugs.

For more details about **Slate** and its features, visit the official [Slate GitHub repository](https://github.com/slatedocs/slate).

# License

This documentation is open-source and available under the [MIT License](https://github.com/yourusername/centrifuge-sdk-docs/blob/main/LICENSE).