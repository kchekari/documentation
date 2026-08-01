---
title: "Windows Server 2025 - Rôle services de certificats"
tableOfContents: false
sidebar:
  label: "Windows Server - Service de certificats"
date: 2025-12-17
slug: win2025-certificat
tags:
    - Windows
authors:
 - Karim
featured: true
---
Depuis Windows Server 2025, il est nécessaire d’activer le rôle Services de certificats Active Directory afin de permettre une authentification Active Directory ou LDAP.

Aller dans le Gestionnaire de serveur et Ajouter des rôles et fonctionnalités.

Dans la fenêtre, cocher Services de certificats Active Directory
![alt text](./images/win2025-certificat-1765965314563.png)
Laisser cocher Autorité de certification
![alt text](./images/win2025-certificat-1765965372902.png)
Une fois installé, il faut terminer la configuration.

![alt text](./images/win2025-certificat-1766338417529.png)

Valider les informations d’identification.

![alt text](./images/win2025-certificat-1765965378195.png)

Dans l’écran suivant, cocher Autorité de certification.

![alt text](./images/win2025-certificat-1765965383482.png)

Valider ensuite les écrans suivants.

![alt text](./images/win2025-certificat-1765965432987.png)
![alt text](./images/win2025-certificat-1765965457109.png)
![alt text](./images/win2025-certificat-1765965471208.png)
![alt text](./images/win2025-certificat-1765965481363.png)
![alt text](./images/win2025-certificat-1765965488788.png)
![alt text](./images/win2025-certificat-1765965497108.png)
![alt text](./images/win2025-certificat-1765965507616.png)
![alt text](./images/win2025-certificat-1765965518548.png)
![alt text](./images/win2025-certificat-1765965529530.png)
Votre autorité est prête !

### Exporter le certificat de l'Autorité de certificat (CA)

#### Depuis l'interface Graphique

Ouvrir le composant, autorité de certification.

![alt text](./images/win2025-certificat-1766340453134.png)

Ouvrir les propriétés de l'autorité.

![alt text](./images/win2025-certificat-1766340822222.png)

Dans l'onglet `Général > Afficher le certificat`

![alt text](./images/win2025-certificat-1766340878302.png)

Dans l'onglet Détails, choisir de copier le certificat dans un fichier.

![alt text](./images/win2025-certificat-1766340960039.png)

Choisir le format X.509 encodé en base 64.

![alt text](./images/win2025-certificat-1766341033507.png)

Donner ensuite l'emplacement où sera enregistré le fichier.

Vous pouvez ouvrir le fichier avec le notepad pour avoir accès au certificat.

![alt text](./images/win2025-certificat-1766341115809.png)

#### Depuis PowerShell

Sur l’AD, afficher les certificats racine et leur empreinte :

```bash
Get-ChildItem -Path Cert:\LocalMachine\Root
```

![alt text](./images/win2025-certificat-1766343282814.png)

 On va ensuite exporter le certificat de l’AD en utilisant ton Thumbprint :

```bash
$cert = Get-ChildItem -Path Cert:\LocalMachine\Root\2D7EF1C0C1C20E4C37EC17BCCFE33B2049F2F2A5
Export-Certificate -Cert $cert -FilePath c:\ssl\root-ca-cert.cer -Type CERT
certutil -encode c:\ssl\root-ca-cert.cer c:\ssl\root-ca-cert.pem
```

![alt text](./images/win2025-certificat-1766343607505.png)

Les fichiers sont bien créés.

![alt text](./images/win2025-certificat-1766343638285.png)