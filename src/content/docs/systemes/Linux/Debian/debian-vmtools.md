---
title: "Debian : Installer les VM Tools"
tableOfContents: false
sidebar:
  label: "Debian – VMTools"
date: 2025-12-19
slug: debian-vmtools
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
Pour optimiser la machine virtuelle, il faut lui installer ses drivers :

```bash
$ sudo apt install open-vm-tools
```

Normalement, ils sont intégrés à Debian 13 (DVD installation)