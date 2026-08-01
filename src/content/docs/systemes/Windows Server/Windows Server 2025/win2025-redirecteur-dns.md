---
title: "Windows Server - Redirecteur DNS"
tableOfContents: false
sidebar:
  label: "Windows Server - Redirecteur DNS"
date: 2025-12-16
tags:
    - Windows
authors:
 - Karim
featured: true
---
Dans un environnement Active Directory, les redirecteurs DNS permettent à ton serveur DNS interne de déléguer la résolution des noms qu’il ne connaît pas (par exemple les sites Internet) à un serveur DNS externe fiable (comme celui de ton fournisseur d’accès ou de ton pare-feu). Cela évite que le serveur doive interroger directement l’ensemble de la hiérarchie DNS publique, ce qui accélère les résolutions, réduit le trafic réseau et améliore la sécurité en contrôlant vers quels serveurs externes les requêtes sont envoyées.

Lancer l’outil DNS, sur le serveur, clic droit > Propriétés > Redirecteurs > Modifier.

![alt text](images/win2025-redirecteur-dns-1765895487467.png)