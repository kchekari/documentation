---
title: "Installation GLPI 10"
tableOfContents: false
sidebar:
  label: "GLPI 10 - Installation"
date: 2025-12-19
slug: install-10-debian
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
GLPI est un logiciel libre de gestion des services informatiques et de gestion des services d’assistance. Cette solution libre est éditée en PHP et distribuée sous licence GPL.

Installation de GLPI 10 sur un serveur Debian 11.

Il faut déjà disposer d’un serveur LAMP.

Installation des dépendances et rechargement d’Apache

```bash
apt install php-ldap php-intl php-apcu php-xmlrpc php-zip php-bz2
service apache2 reload
```

Accès à la documentation :

[https://glpi-install.readthedocs.io/en/latest/](https://glpi-install.readthedocs.io/en/latest/)

Lien vers le GitHub :

[https://github.com/glpi-project/glpi/releases](https://github.com/glpi-project/glpi/releases)

## Installation des binaires

Téléchargement des binaires et décompression

```bash
wget https://github.com/glpi-project/glpi/releases/download/10.0.3/glpi-10.0.3.tgz
```

![alt text](./images/install-10-debian-1766159808640.png)

Décompresser l’archive et la placer dans le répertoire d’apache

```bash
tar -xvzf glpi-10.0.3.tgz
mv glpi/ /var/www/html/glpi
```

![alt text](./images/install-10-debian-1766159816284.png)

Donner les droits à Apache sur le repertoire files et config

```bash
chgrp www-data -R /var/www/html/glpi/{config,files}
chown www-data -R /var/www/html/glpi/{config,files}
chown www-data -R /var/www/html/glpi/marketplace
```

## Configuration de GLPI

Il faut se rendre à l’adresse : http://IP_DU_SERVEUR/glpi/

On valide la langue

![alt text](./images/install-10-debian-1766159828006.png)

On accepte la licence

![alt text](./images/install-10-debian-1766159836084.png)

On choisit l’installation

![alt text](./images/install-10-debian-1766159842792.png)

Il faut que tous les paramètres requis soient validés

![alt text](./images/install-10-debian-1766159851152.png)

Remplir les informations de connexion à la base de données

![alt text](./images/install-10-debian-1766159859100.png)

Créer une nouvelle base de données

![alt text](./images/install-10-debian-1766159869370.png)

La base de données est bien créée

![alt text](./images/install-10-debian-1766159878084.png)

On désactive la collecte des données

![alt text](./images/install-10-debian-1766159885071.png)

On valide

![alt text](./images/install-10-debian-1766159891840.png)

Un dernier écran avec les informations de connexion

![alt text](./images/install-10-debian-1766159902316.png)

On peut maintenant se connecter

![alt text](./images/install-10-debian-1766159910188.png)

On arrive sur le tableau de bord

![alt text](./images/install-10-debian-1766159915808.png)
