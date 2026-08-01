---
title: "Mémo Cisco"
tableOfContents: false
sidebar:
  label: "Cisco - Mémo"
date: 2025-12-17
tags:
    - Cisco
    - Réseaux
authors:
 - Karim
featured: true
---

### Commutateur :

<details>
<summary>Attribuer un nom</summary>

```bash
Switch(config)#hostname nom_actif
```
</details>
<details>
<summary>
Attribuer une adresse IP à un VLAN
</summary>

```bash
Switch(config)#interface vlan num_vlan
Switch(config-if)#ip address adresseIP masque
Switch(config-if)#no shutdown
```

</details>
<details>
<summary>Mettre une passerelle par défaut</summary>

```bash
Switch(config)#ip default-gateway adresseIP
```

</details>
<details>
<summary>Créer un Vlan</summary>

```bash
Switch(config)#vlan num_vlan
Switch(config-vlan)#name nom_vlan
```

</details>
<details>
<summary>Affecter des ports à un Vlan</summary>

#### Pour une seule interface

```bash
Switch(config)#interface nom_interface
Switch(config-if)#switchport access vlan num_vlan
```

#### Pour plusieurs interfaces (ex : du port 3 au port 12)

```bash
Switch(config)#interface range fa 0/3-12
Switch(config-if)#switchport access vlan num_vlan
```
</details>
<details>
<summary>Configurer un port trunk (802.1q)</summary>

```bash
Switch(config)#interface nom_interface
Switch(config-if)#switchport mode trunk
```

Par défaut, tous les Vlan sont autorisés à transiter par le port. Pour transmettre tous les Vlan sauf un :

```bash
Switch(config-if)#switchport trunk allowed vlan except num_vlan
```

Pour transmettre que certains VLAN (par exemple le 2 et le 3) :
```bash
Switch(config)#interface fastEthernet 0/1
Switch(config-if)#switchport trunk allowed vlan add 2
Switch(config-if)#switchport trunk allowed vlan add 3
```
</details>
<details>
<summary>Vérifier les VLANs</summary>

```bash
Switch# show  vlan
```

</details>
<details>
<summary>Supprimer la configuration de démarrage</summary>

```bash
Switch# erase startup-config // Valider deux fois pour confirmer
```

On reviendra au redémarrage au paramétrage d’usine

Supprimer le fichier qui contient la description des vlan

```bash
Switch# delete flash:vlan.dat // Valider deux fois pour confirmer
```

Pour vérifier que la suppression est effective, il faudra redémarrer le switch :
```bash
Switch# reload
```
</details>
<details>
<summary>
Configurer un port en mode miroir
</summary>
Un port miroir « reflète » tout ce qui se passe sur un port ou un ensemble de ports.

Le port miroir est donc le port destination
Les ports dont le trafic est récupéré sur le port miroir s’appelle ports source

Pour envoyer une copie des trames reçues sur certains ports vers un port miroir, il faut définir une session. Sur un même switch, on pourrait (même si c’est rarement le cas) envoyer par exemple les trames reçues sur les ports 1 à 5 sur un port 11 et les ports 6 à 10 sur un port 12. Pour cela il faudrait définir 2 sessions distinctes.

Supprimer toute session configurée
```bash
Switch(config)# no monitor session all
```

Définir une session (exemple) ; ici on souhaite renvoyer sur le port n° 7 du switch tout ce qui arrive sur les ports 1, 2, 3, 4 et 8 du switch. On peut utiliser le tiret (trait d’union) pour une liste d’interfaces contigües.

```bash
Switch(config)# monitor session 1 source interface fa0/1 - 4
Switch(config)# monitor session 1 source interface fa0/8
Switch(config)# monitor session 1 destination interface fa0/7
```

NB : Le port 7 ne peut plus servir à une communication normale. Il ne peut servir qu’à un poste chargé de surveiller le trafic et sur lequel on lance un analyseur de trames comme Wireshark. Aucun ping ne sera possible depuis ou vers ce poste.

Après cette configuration, on peut afficher le récapitulatif des sessions définies :
```bash
Switch# show monitor         // Affiche toutes les sessions
```
</details>

## Routeur :

<details>
<summary>
Attribuer un nom
</summary>

```bash
Routeur(config)#hostname nom_actif
```

</details>
<details>
<summary>
Configurer une interface réseau
</summary>

```bash
Routeur(config)# interface nom_interface
Routeur(config-if)# ip address adresseIP masque
Routeur(config-if)# no shutdown
```

La commande clock rate n’est nécessaire que pour le routeur qui fournit le signal de synchronisation (symbolisé par l’horloge sur le packet tracer).
</details>

### Configuration du routage

<details>
<summary>
    Ajouter une route statique
</summary>

```bash
Routeur(config)# ip route  adresseIP_réseau_dest  masque  prochain saut
```

</details>
<details>
<summary>
    Ajouter une route par défaut
</summary>

```bash
Routeur(config)# ip  route  0.0.0.0  0.0.0.0  prochain saut
```
</details>
<details>
<summary>
    Configurer le protocole de routage RIP v2
</summary>

```bash
Routeur(config)#router rip  
Routeur(config-router)#version 2
Routeur(config-router)#network  adresseIP_réseau1   
Routeur(config-router)#network  adresseP_réseauN
Routeur(config-router)# no auto-summary
```
</details>

### Configuration du protocole 802.1q

<details>
<summary>
    Configurer l’interface physique
</summary>

```bash
Routeur(config)#interface nom_interface
Routeur(config-if)#no ip address
Routeur(config-if)#no shutdown
```

Le “no ip address” n’est utile que si une adresse IP avait déjà été attribuée à l’interface physique.
</details>
<details>
<summary>
Configurer une sous-interface virtuelle
</summary>

```bash
Routeur(config)#interface nom_interface.num
Routeur(config-subif)#encapsulation dot1q num_vlan
Routeur(config-subif)#ip address adresseIP masque
Routeur(config-subif)# no shutdown
```
</details>
<details>
<summary>
Configuration du service DHCP
</summary>
Déclarer et configurer un pool d’adresses

```bash
Routeur(config)#ip dhcp pool id_pool
Routeur(dhcp-config)#network adresseIP_Reseau Masque
Routeur(dhcp-config)#default-router adresse_passerelle
Routeur(dhcp-config)#dns-server adresse_serveurDNS
Routeur(dhcp-config)#lease jours heures minutes
```

Exclure des adresses IP

```bash
Routeur(config)# ip dhcp excluded-address adresseIP_1 adresseIP_N
```

</details>
<details>
<summary>
Activation du relais DHCP
</summary>

```bash
Routeur(config)#interface nom_interface
Routeur(config-if)#ip helper-address adresseIP_du_serveurDHCP
```
</details>

### Configuration du NAT/PAT

<details>
<summary>
Définir le ou les interfaces inside (privée) et outside (publique)
</summary>

```bash
Routeur(config)#interface nom_interface
Routeur(config-subif)ip nat inside
Routeur(config)#interface nom_interface
Routeur(config-subif)ip nat outside
```

</details>
<details>
<summary>
Définir une règle de NAT/PAT ou masquage d’adresse
</summary>

```bash
Routeur(config)# ip  nat  inside  source  list  num_list  interface  nom_interface  overload
```

</details>
<details>
<summary>
Définir une access-list indiquant le réseau interne qui utilisera le NAT
</summary>

```bash
Routeur(config)# access-list  num_list  permit  réseau_IP  masque_inversé
```

Le masque utilisé dans les ACL est un masque inversé.

Par exemple, pour un masque en /24, le masque utilisé pour mettre en place l’ACL sera non pas 255.255.255.0 mais 0.0.0.255. De même, pour le masque 255.240.0.0, celui utilisé sera 0.0.15.255.
</details>
<details>
<summary>
NAT Statique :
</summary>

```bash
R(config)# ip nat inside source static 192.168.0.1 200.100.40.1
```

</details>
<details>
<summary>
NAT avec pool d’adresses :
</summary>
Définir un pool d’adresses

```bash
R(config)# ip nat pool p1 200.100.40.10 20.100.40.50 netmask 255.255.255.0
```

Une fois le pool d’adresses défini, il faut indiquer quelles adresses sont
autorisées à utiliser la traduction d’adresses, à l’aide d’une access-list.

```bash
R(config)# access-list 1 permit 192.168.1.0 0.0.0.255
R(config)# ip nat inside source list 1 pool p1
```

</details>
<details>
<summary>
Le NAT/PAT
</summary>
S0/1/0 est l’interface publique

```bash
Routeur(config)# ip nat inside source list 10 interface serial 0/1/0 overload
Routeur(config)# access-list 10 permit 192.168.10.0 0.0.0.255
```

Définition de l’access-list 10 indiquant les réseaux / hôtes autorisés à utiliser le nat/pat lors de communications passant par l’interface serial 0/1/0 du routeur

```bash
Routeur(config)# access-list 10 permit 192.168.20.0 0.0.0.255
```

</details>
<details>
<summary>
Pour consulter les traductions en cours :
</summary>

```bash
Routeur# show ip nat translations
```

</details>
<details>
<summary>
Configurer une redirection
</summary>

```bash
Routeur(config)# ip  nat  inside  source  static tcp IP_privée port_interne  IP_public port_public
```

</details>
<details>
<summary>
Mettre un port en mode miroir
</summary>

```bash
Routeur(config)# monitor session <numero_session> source interface <nom_interface> <sens_paquets>
```
 
Par exemple :

```bash
monitor session 1 source interface g0/0 both
```
</details>