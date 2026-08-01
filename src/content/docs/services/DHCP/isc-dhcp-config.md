---
title: "ISC-DHCP-SERVER : Configuration"
tableOfContents: false
sidebar:
  label: "ISC-DHCP-SERVER - Config"
date: 2025-12-19
slug: isc-dhcp-config
tags:
  - Linux
  - Debian
authors:
  - Karim
featured: true
---
Installer le paquet

```bash
sudo apt install isc-dhcp-server
```

Pour configurer l’interface d’écoute, il faut éditer le fichier /etc/default/isc-dhcp-server

```bash
admin-fw@KCH-M2L-RT:~$ sudo nano /etc/default/isc-dhcp-server
```

La confguration se fait ensuite dans le fichier /etc/dhcp/dhcpd.conf

![alt text](./images/isc-dhcp-config-1766154694706.png)

- subnet correspond au masque de sous réseau
- range représente l’étendue DHCP
- option domain-name-servers distribue un serveur DNS
- option domain-name fournit le nom de domaine du réseau
- option routers fixe une passerelle
- option broadcast-address indique la passerelle
 -default-lease-time gère la durée du bail.

Une fois les modifications apportées, il faut redémarrer le service :

```bash
sudo systemctl restart isc-dhcp-server
```

Pour vérifier le statut du service :

```bash
sudo systemctl status isc-dhcp-server
```

Pour consulter les logs du serveur DHCP :

```bash
sudo journalctl -xe | grep -e DHCPACK -e DHCPOFFER
```

![alt text](./images/isc-dhcp-config-1768293686900.png)

Pour voir la liste des baux DHCP attribués, il faut consulter le fichier /var/lib/dhcp/dhcpd.leases

```bash
cat /var/lib/dhcp/dhcpd.leases
```

![alt text](./images/isc-dhcp-config-1768293775007.png)