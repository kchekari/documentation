---
title: "Debian 12 – Activation DNS"
tableOfContents: false
sidebar:
  label: "Debian – Activation DNS"
date: 2025-12-19
slug: debian-dns
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
Si vous avez installé votre Debian 12 et que vous n’aviez pas de réseau, le paquet relatif au DNS ne s’est pas installé.

![alt text](images/debian-dns-1766153660742.png)

Le problème se repère rapidement quand vous voyez que vous n’avez pas de fichier resolv.conf.

Maintenance que vous avez du réseau (sinon ça ne sert à rien). Insérer à nouveau le DVD dans Debian dans le lecteur.

Lancer la commande :

```bash
# apt install resolvconf
```

![alt text](images/debian-dns-1766153678169.png)

Votre fichier resolv.conf existe bien dorénavant.

![alt text](images/debian-dns-1766153692979.png)

Ajouter les lignes avec vos serveurs DNS

```bash
nameserver 8.8.8.8
```

![alt text](images/debian-dns-1766153703487.png)

On sauvegarde le fichier et la résolution DNS fonctionne 😀.

![alt text](images/debian-dns-1766153713184.png)