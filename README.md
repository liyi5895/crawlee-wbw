# wbw-finetune-crawlee

A custom configuration of [Crawlee](https://github.com/apify/crawlee) set up to crawl [Wait But Why](https://waitbutwhy.com/) blog content using CheerioCrawler.

## Overview

This repository is a fork of Crawlee with customized crawling logic specifically for the Wait But Why blog. It uses CheerioCrawler since the blog content is primarily static.

## Modifications

The main changes are in `main.js`, which includes:
- Configuration for CheerioCrawler
- Custom data extraction logic for Wait But Why's content structure
- URL filtering to stay within the blog domain and exclude product pages

## License

This project is licensed under the same terms as the original Crawlee repository.
