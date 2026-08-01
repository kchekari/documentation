---
title: "Debian : Renommer une machine"
tableOfContents: false
sidebar:
  label: "Debian – Renommer"
date: 2025-12-19
slug: debian-rename
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---

:::tip
Testé sur Debian 12/13
:::

Pour voir son hostname, utiliser la commande :

```bash
admin-fw@m2l-routeur:~$ hostnamectl
```

![alt text](./images/debian-rename-1766154999001.png)

Pour changer le nom d’une machine linux Debian, il faut modifier deux fichiers :

- /etc/hostname
- /etc/hosts

```bash
nano /etc/hosts
nano /etc/hostname
```

![alt text](./images/debian-rename-1766155009507.png)
![alt text](./images/debian-rename-1766155016883.png)

On peut également le changer en ligne de commande

```bash
sudo hostnamectl set-hostname KCH-M2L-RT
```

Redémarrez le script shell hostname.sh pour les modifications à prendre en vigueur :

```bash
invoke-rc.d hostname.sh restart
```

Après une déconnexion, l’hostname est à jour.

![alt text](./images/debian-rename-1766155028465.png)