---
title: "OpenVPN - Installation sur Debian"
tableOfContents: true
sidebar:
  label: "OpenVPN - Installation sur Debian"
date: 2026-03-13
slug: openvpn-installation-debian
tags:
    - Linux
    - Réseaux
    - Routage
    - VPN
    - OpenVPN
authors:
 - Karim
featured: true
---
OpenVPN est une solution de réseau privé virtuel (VPN) libre et open source qui permet de créer un tunnel sécurisé entre deux réseaux ou entre un utilisateur distant et un réseau d’entreprise via Internet. Il utilise les protocoles SSL/TLS pour assurer l’authentification et le chiffrement des communications, garantissant ainsi la confidentialité et l’intégrité des données échangées. OpenVPN peut fonctionner en mode routé (TUN), pour connecter des utilisateurs à un réseau distant, ou en mode bridgé (TAP), pour relier deux réseaux comme s’ils étaient sur le même segment. Grâce à son système d’authentification par certificats, clés ou identifiants, il offre un haut niveau de sécurité et est largement utilisé dans les entreprises pour permettre aux collaborateurs nomades d’accéder aux ressources internes (serveurs, fichiers, applications) depuis l’extérieur tout en passant par un tunnel chiffré sur Internet.

installer OpenVPN sur Debian est relativement simple et peut être réalisé en quelques étapes. Voici comment procéder pour installer et configurer OpenVPN sur une machine Debian :

## INSTALLATION D’OPENVPN SUR DEBIAN

1. **Mettre à jour les paquets** :

   ```bash
   apt update
   ```

2. **Installer OpenVPN** :

   ```bash
   apt install openvpn easy-rsa
   ```

![alt text](images/openvpn-installation-debian-1773414756776.png)

## CONFIGURATION D’OPENVPN SUR DEBIAN

3. **Création de l’infrastructure de certificats (PKI)**

Créer le dossier EasyRSA :

```bash
make-cadir /etc/openvpn/easy-rsa
```

Aller dans le dossier :

```bash
cd /etc/openvpn/easy-rsa
```

4. **Initialiser la PKI**

```bash
./easyrsa init-pki
```

![alt text](images/openvpn-installation-debian-1773415231815.png)

5. **Création de l'autorité de certification**

```bash
./easyrsa build-ca nopass
```

![alt text](images/openvpn-installation-debian-1773415309547.png)

Le certificat CA est créé `pki/ca.crt`

![alt text](images/openvpn-installation-debian-1773415385111.png)

6. **Création du certificat serveur**

```bash
./easyrsa gen-req server nopass
```

![alt text](images/openvpn-installation-debian-1773415473840.png)

7. **Signer le certificat** :

```bash
./easyrsa sign-req server server
```

![alt text](images/openvpn-installation-debian-1773417003201.png)

8. **Génération de Diffie-Hellman** :

```bash
./easyrsa gen-dh
```

9. **Génération de la clé TLS** :

```bash
openvpn --genkey secret ta.key
```

10. **Copier les certificats et les clés dans le dossier de configuration d’OpenVPN**

```bash
cp pki/ca.crt /etc/openvpn/server/
cp pki/issued/server.crt /etc/openvpn/server/
cp pki/private/server.key /etc/openvpn/server/
cp pki/dh.pem /etc/openvpn/server/
cp ta.key /etc/openvpn/server/
```

## CREATION D’UN CERTIFICAT CLIENT

11. **Création d’un certificat client**

- Créer un utilisateur VPN :

```bash
./easyrsa gen-req [USER] nopass
```

![alt text](images/openvpn-installation-debian-1773418589923.png)

- Signer le certificat :

```bash
./easyrsa sign-req client [USER]
```

![alt text](images/openvpn-installation-debian-1773418613842.png)

12. **Configuration du serveur OpenVPN**

Créer le fichier de configuration du serveur OpenVPN `/etc/openvpn/server/server.conf`

Configuration :

```bash
port 1194
proto udp
dev tun

ca ca.crt
cert server.crt
key server.key
dh dh.pem

server 10.8.0.0 255.255.255.0

push "route [RESEAU INTERNE] [MASQUE RESEAU INTERNE]"

keepalive 10 120

tls-crypt ta.key

data-ciphers AES-256-GCM:AES-128-GCM

persist-key
persist-tun

user nobody
group nogroup

status /var/log/openvpn-status.log
log /var/log/openvpn.log

verb 3
```

Il est possible d’ajouter d’autres directives de configuration selon les besoins spécifiques du réseau et des clients VPN comme un serveur DNS ou definir la passerelle par défaut pour les clients VPN.

```bash
push "redirect-gateway def1"
push "dhcp-option DNS [IP_DNS]"
```

13. **Démarrage du serveur OpenVPN**

```bash
systemctl start openvpn-server@server
```

- Activer au démarrage :

```bash
systemctl enable openvpn-server@server
```

Vérifier :

```bash
systemctl status openvpn-server@server
```

![alt text](images/openvpn-installation-debian-1773418864062.png)

## CONFIGURATION DU CLIENT WINDOWS

14. **Configuration du client Windows**

Installer : [OpenVPN Connect](https://openvpn.net/client/)

Le client doit posséder :

- ca.crt
- karim.crt
- karim.key
- ta.key

Créer un fichier - [USER].ovpn - avec la configuration suivante :

```bash
client
dev tun
proto udp

remote [IP_SERVEUR] 1194

resolv-retry infinite
nobind
persist-key
persist-tun

ca ca.crt
cert karim.crt
key karim.key

remote-cert-tls server

tls-crypt ta.key

data-ciphers AES-256-GCM:AES-128-GCM

verb 3
```

Noter qu'il est possible de regrouper tous les certificats et clés dans un même fichier .ovpn pour faciliter la configuration du client.

```bash
client
dev tun
proto udp
remote IP_PUBLIQUE_DU_SERVEUR 1194

resolv-retry infinite
nobind
persist-key
persist-tun

remote-cert-tls server
data-ciphers AES-256-GCM:AES-128-GCM
verb 3

<ca>
-----BEGIN CERTIFICATE-----
... contenu de ca.crt ...
-----END CERTIFICATE-----
</ca>

<cert>
-----BEGIN CERTIFICATE-----
... contenu de karim.crt ...
-----END CERTIFICATE-----
</cert>

<key>
-----BEGIN PRIVATE KEY-----
... contenu de karim.key ...
-----END PRIVATE KEY-----
</key>

<tls-crypt>
-----BEGIN OpenVPN Static key V1-----
... contenu de ta.key ...
-----END OpenVPN Static key V1-----
</tls-crypt>
```

Voilà un script qui permet de regrouper tous les éléments nécessaires à la connexion dans un seul fichier .ovpn, ce qui simplifie grandement la configuration du client OpenVPN Connect. Il suffit de remplacer les sections `<ca>`, `<cert>`, `<key>` et `<tls-crypt>` par le contenu des fichiers correspondants (ca.crt, karim.crt, karim.key et ta.key) pour que le client puisse se connecter au serveur OpenVPN sans avoir à gérer plusieurs fichiers séparés.

```bash
CLIENT="[NOM_UTILISATEUR]"
SERVER_IP="[IP_PUBLIQUE_DU_SERVEUR]"
OUTPUT="/etc/openvpn/client/${CLIENT}.ovpn"

mkdir -p /etc/openvpn/client

cat > "$OUTPUT" <<EOF
client
dev tun
proto udp
remote ${SERVER_IP} 1194

resolv-retry infinite
nobind
persist-key
persist-tun

remote-cert-tls server
data-ciphers AES-256-GCM:AES-128-GCM
verb 3

<ca>
$(cat /etc/openvpn/easy-rsa/pki/ca.crt)
</ca>

<cert>
$(cat /etc/openvpn/easy-rsa/pki/issued/${CLIENT}.crt)
</cert>

<key>
$(cat /etc/openvpn/easy-rsa/pki/private/${CLIENT}.key)
</key>

<tls-crypt>
$(cat /etc/openvpn/server/ta.key)
</tls-crypt>
EOF
```

![alt text](images/openvpn-installation-debian-1773419587285.png)

Vous pouvez ensuite importer ce fichier .ovpn dans le client OpenVPN Connect pour établir la connexion VPN avec le serveur Debian.

![alt text](images/openvpn-installation-debian-1773420425131.png)

15. **Test de la connexion VPN**

Une fois la configuration du client terminée, vous pouvez tester la connexion VPN en lançant le client OpenVPN Connect et en vérifiant que vous pouvez accéder aux ressources du réseau interne du serveur Debian (par exemple, en pingant une machine du réseau interne ou en faisant un bureau à distance). Vous pouvez également vérifier les logs du serveur OpenVPN pour vous assurer que la connexion a été établie correctement.

![alt text](images/openvpn-installation-debian-1773420437476.png)

Le poste client a bien une IP du réseau VPN.

![alt text](images/openvpn-installation-debian-1773420460416.png)

Il a également une route vers le réseau interne du serveur Debian.

![alt text](images/openvpn-installation-debian-1773420559419.png)

Et le bureau à distance fonctionne.

![alt text](images/openvpn-installation-debian-1773420575961.png)