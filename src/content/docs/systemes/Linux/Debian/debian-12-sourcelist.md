---
title: "Debian 12 - Sources.list"
sidebar:
  label: "Debian 13 - Sources.list"
---
:::note
testé sur Debian 12
:::
Voilà le sources.list de Debian 12

```bash
deb http://deb.debian.org/debian/ bookworm main non-free-firmware
deb-src http://deb.debian.org/debian/ bookworm main non-free-firmware
 
deb http://security.debian.org/debian-security bookworm-security main non-free-firmware
deb-src http://security.debian.org/debian-security bookworm-security main non-free-firmware
 
# bookworm-updates, to get updates before a point release is made;
# see https://www.debian.org/doc/manuals/debian-reference/ch02.en.html#_updates_and_backports
deb http://deb.debian.org/debian/ bookworm-updates main non-free-firmware
deb-src http://deb.debian.org/debian/ bookworm-updates main non-free-firmware
```

Pour éditer le fichier sources.list
```bash
nano /etc/apt/sources.list
```
Puis mettre à jour la liste des paquets
```bash
apt update
```
Pour mettre à jour le système
```bash
apt upgrade
```

