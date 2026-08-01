---
title: "Debian - CURL"
tableOfContents: false
sidebar:
  label: "Debian – CURL"
date: 2025-12-19
slug: debian-curl
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
### Description

« Curl », qui est l’acronyme de « Client URL », est un outil en ligne de commande polyvalent utilisé à la base pour vérifier la connectivité et la réponse d’un site rapidement. Il est également utilisé pour effectuer des transferts de données à travers divers protocoles. Il offre une gamme complète de fonctionnalités comme le téléchargement de fichiers et la prise en charge de nombreux protocoles comme HTTP, FTP, SCP.
Son utilisation est simple, les utilisateurs spécifient des options directement dans leur terminal et la réponse leur est directement renvoyée sur celui-ci.

### Installation

Voici le guide d’installation pour la commande Curl :

- Sous Linux (Debian/Ubuntu) :

```bash
    sudo apt-get install curl
```
- Sous Linux (Red Hat/Fedora) :

```bash
    sudo yum install curl
```

- Sous macOS (via Homebrew) :

```bash
    brew install curl
```

- Sous Windows : vous pouvez télécharger l’exécutable « Curl » depuis le site officiel (https://curl.se/download.html) et suivre les instructions d’installation.

### Cas d’utilisation

- Tests de connectivité : pour vérifier la disponibilité et la connectivité d’un serveur ou d’un service web.
- Transfert de fichiers : pour télécharger des fichiers (contenu HTML d’une page web ou télécharger des ressources telles que des images) depuis le web ou les téléverser vers un serveur distant via FTP, SCP, SFTP, etc.
- Appels d’API : pour interagir avec des API REST en effectuant des requêtes HTTP (GET, POST, PUT, DELETE, etc.).

Fonctionnalités principales
- Tests de connectivité : peut être utilisé pour effectuer des tests de connectivité vers des serveurs ou des services web, en vérifiant leur disponibilité et leur latence.
- Transfert de données multi-protocoles : prend en charge une variété de protocoles, notamment HTTP, HTTPS, FTP, SCP, SFTP, LDAP.
- Personnalisation des requêtes : permet de spécifier diverses options pour personnaliser les requêtes, telles que les en-têtes HTTP, les méthodes, les cookies, etc.
- Téléchargement de fichiers : permet de télécharger des fichiers depuis le web vers votre système ou de les envoyer vers un serveur distant.
- Support de proxy : il prend en charge l’utilisation de proxies pour les requêtes, ce qui peut être essentiel dans les environnements réseau complexes.

### Exemple d’exploitation ou d’utilisation

Supposons que vous souhaitiez vérifier la connectivité à un serveur web distant. Vous pouvez utiliser « Curl » pour effectuer un test de connectivité en envoyant une requête « HTTP HEAD » au serveur :

```bash
curl -I https://www.perdu.com
```

Cela vous donnera des informations sur la réponse du serveur, y compris le code de statut HTTP, les en-têtes de réponse, et le temps de réponse. Si le serveur est accessible, Curl affichera alors ces détails : HTTP/2 200 date: Tue, 31 Oct 2023 10:16:45 GMT content-type: text/html last-modified: Thu, 02 Jun 2016 06:01:08 GMT etag: W/ »cc-5344555136fe9-gzip » cache-control: max-age=600 expires: Tue, 31 Oct 2023 10:26:45 GMT vary: Accept-Encoding,User-Agent server: cloudflare cf-ray: 81eb24f4fab92292-CDG alt-svc: h3= »:443″; ma=86400

Dans le cas où vous souhaitez utiliser une méthode de requête HTTP particulière :

Il est possible d’utiliser l’option -X <méthode>, de la façon suivante :

```bash
curl -X POST https://www.perdu.com
```

Ici, nous réalisons une requête HTTP en utilisant la méthode POST, mais nous aurions pu utiliser n’importe quelle autre méthode.

Pour l’exploitation d’une vulnérabilité, imaginons que vous ayez un endpoint spécifique que vous souhaitez tester sur une requête de type POST

Vous pouvez préciser les données que vous souhaitez poster avec l’option -d  :

```bash
curl -X POST -d "username=alice&password=bob" "https://example.com/login"
```

Dans cet exemple, nous avons envoyé une requête permettant d’enregistrer l’utilisateur « alice » avec le mot de passe « bob » sur l’endpoint /login de « example.com ».

### References

- [https://opensource.com/sites/default/files/gated-content/curl-cheat-sheet.pdf](https://opensource.com/sites/default/files/gated-content/curl-cheat-sheet.pdf)
- [https://curl.se/docs/manpage.html](https://curl.se/docs/manpage.html)