---
title: "pfSense - Connexion AD 2025"
tableOfContents: false
sidebar:
  label: "pfSense - AD 2025"
date: 2025-12-17
tags:
    - Windows
authors:
 - Karim
featured: true
---
Il faut au préalable avoir installé le rôle d’autorité de certification sur l’ad.

Sur l’AD, afficher les certificats racine et leur empreinte :

```powershell
Get-ChildItem -Path Cert:\LocalMachine\Root
```

![alt text](./images/pfsense-connexion-ad-1765958514235.png)
On va ensuite exporter le certificat de l’AD :

```powershell
$cert = Get-ChildItem -Path Cert:\LocalMachine\Root\A7DA837BA5C0EF840E687E8BE43DC9851EF090B9
Export-Certificate -Cert $cert -FilePath c:\ssl\root-ca-cert.cer -Type CERT
certutil -encode c:\ssl\root-ca-cert.cer c:\ssl\root-ca-cert.pem
```

![alt text](./images/pfsense-connexion-ad-1765958528193.png)
Une fois le certificat en main, il faut également un utilisateur LDAP capable de lire l’annuaire (j’ai déjà un ldap.reader).

Maintenant que nous avons tout le nécessaire, direction pfSense.

`System > Certificates > Authorities > Add`
![alt text](./images/pfsense-connexion-ad-1765958706049.png)
Nous allons importer le certificat
![alt text](./images/pfsense-connexion-ad-1765958713697.png)
L’autorité est créé.
![alt text](./images/pfsense-connexion-ad-1765958720850.png)
Il faut que le serveur puisse répondre au ping donc configurer le DNS et rajouter un Host Overrides
![alt text](./images/pfsense-connexion-ad-1765958728890.png)
Le ping doit fonctionner
![alt text](./images/pfsense-connexion-ad-1765958736499.png)
Nous pouvons maintenant créer le serveur d’authentification dans le menu System > User Manager > Authentification Server
![alt text](./images/pfsense-connexion-ad-1765958744435.png)