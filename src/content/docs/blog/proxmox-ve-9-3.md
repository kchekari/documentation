
---
title: "Proxmox VE 9.3 : les nouveautés de la plateforme de virtualisation"
description: "Découvrez les nouveautés de Proxmox VE 9.3 : stockage SAN, snapshots LVM, QEMU 11.1, administration des clusters et améliorations du SDN."
date: 2026-11-27
tags:
  - Proxmox
  - Virtualisation
  - Linux
  - Infrastructure
  - Open Source
---

Le 25 novembre 2026, Proxmox Server Solutions a officiellement annoncé la disponibilité de **Proxmox Virtual Environment 9.3**, la nouvelle version de sa plateforme de virtualisation open source.

Cette version apporte de nombreuses améliorations concernant le stockage d'entreprise, l'administration des clusters, la haute disponibilité, la gestion des réseaux et le diagnostic des incidents.

Proxmox poursuit ainsi le développement de son hyperviseur, avec une attention particulière portée aux infrastructures professionnelles et aux environnements de production.

## 1. Mise à jour des composants techniques

Proxmox VE 9.3 repose sur Debian 13.8 « Trixie » et intègre de nouvelles versions de ses principaux composants logiciels.

| Composant | Version |
| --- | --- |
| Distribution Linux | Debian 13.8 Trixie |
| Noyau Linux par défaut | 7.0 |
| Noyau Linux optionnel | 7.3 |
| QEMU | 11.1 |
| LXC | 7.0 |
| OpenZFS | 2.4 |
| Ceph Tentacle | 20.2 |
| Ceph Umbrella | 21.2 (Technology Preview) |

Ces mises à jour contribuent à la modernisation de la plateforme, notamment en matière de compatibilité matérielle, de virtualisation et de stockage.

Le noyau Linux 7.3 reste optionnel. Le noyau 7.0 demeure celui utilisé par défaut.

## 2. Une meilleure intégration du stockage SAN

L'une des principales évolutions de Proxmox VE 9.3 concerne la gestion du stockage SAN (Storage Area Network).

### Gestion centralisée du Multipath

Jusqu'à présent, la configuration du Multipath nécessitait souvent des interventions manuelles sur chaque serveur du cluster.

Proxmox VE 9.3 propose désormais une gestion centralisée de cette fonctionnalité pour plusieurs technologies de stockage :

- iSCSI ;
- Fibre Channel ;
- NVMe over Fabrics (NVMe-oF).

Le Multipath permet d'utiliser plusieurs chemins d'accès à un même stockage afin d'améliorer sa disponibilité en cas de défaillance d'un lien réseau ou d'un équipement.

Une nouvelle interface est accessible depuis :

**Datacenter > SAN**

Elle permet de visualiser l'état des chemins d'accès aux volumes de stockage sur l'ensemble des nœuds du cluster.

Cette évolution est particulièrement intéressante pour les entreprises disposant de baies de stockage dédiées.

### Intégration des plugins de stockage tiers

Les plugins de stockage développés par des fournisseurs externes bénéficient désormais d'une meilleure intégration dans l'interface Web.

L'objectif est de faciliter l'utilisation de solutions de stockage spécialisées sans multiplier les opérations en ligne de commande.

## 3. Les snapshots sur LVM deviennent adaptés à la production

Proxmox VE 9.0 avait introduit un mécanisme de snapshots reposant sur des chaînes de volumes QCOW2 pour les stockages LVM classiques.

Avec Proxmox VE 9.3, cette fonctionnalité atteint un niveau de maturité permettant son utilisation en production.

Il est important de distinguer :

- **LVM classique** : allocation des volumes en Thick Provisioning ;
- **LVM-Thin** : allocation dynamique de l'espace et gestion native des snapshots ;
- **LVM avec chaînes de volumes** : utilisation d'une succession de volumes pour gérer les snapshots.

Cette évolution enrichit les possibilités offertes aux administrateurs utilisant des stockages LVM partagés, notamment sur des infrastructures SAN.

Pour rappel, un snapshot ne remplace jamais une véritable sauvegarde.

## 4. Un mode maintenance HA accessible depuis l'interface Web

La gestion de la haute disponibilité (HA) bénéficie également d'une amélioration particulièrement pratique.

Il est désormais possible de placer un nœud en mode maintenance directement depuis l'interface Web, sans passer obligatoirement par la ligne de commande.

Cette fonctionnalité facilite les interventions telles que :

- la mise à jour d'un hyperviseur ;
- le remplacement d'un composant matériel ;
- le redémarrage d'un serveur ;
- la maintenance préventive ;
- les interventions sur les équipements réseau.

Les ressources gérées par le mécanisme HA peuvent être déplacées vers les autres nœuds disponibles, sous réserve que la configuration du cluster le permette.

Cette nouveauté simplifie les opérations de maintenance dans les infrastructures comportant plusieurs hyperviseurs Proxmox.

## 5. Une identification unique des machines virtuelles et des conteneurs

Proxmox VE 9.3 introduit un mécanisme d'identification unique des machines virtuelles et des conteneurs LXC.

Jusqu'à présent, les ressources étaient notamment identifiées par leur VMID.

Or, un même identifiant numérique peut être réutilisé au cours de la vie d'une infrastructure ou exister dans plusieurs clusters distincts.

L'introduction d'identifiants uniques permet d'améliorer le suivi des ressources, notamment lors des migrations et des opérations de sauvegarde.

Cette fonctionnalité prend tout son intérêt dans les infrastructures comportant plusieurs clusters et des solutions de sauvegarde centralisées.

## 6. Une interface Web enrichie pour le diagnostic

Proxmox VE 9.3 introduit plusieurs améliorations destinées à faciliter le travail quotidien des administrateurs systèmes.

### Un journal système amélioré

Le journal système bénéficie d'une présentation structurée, avec des filtres et une mise en évidence visuelle des événements.

L'identification des erreurs et des avertissements devient ainsi plus simple.

### Un journal des accès à l'API

Un nouveau journal permet de consulter les accès à l'API Proxmox.

Cette fonctionnalité présente un intérêt particulier pour :

- le diagnostic des applications utilisant l'API ;
- le suivi des automatisations ;
- l'analyse des accès ;
- la recherche d'activités inhabituelles.

### Un historique des mises à jour APT

Une nouvelle interface permet de consulter l'historique des opérations réalisées par le gestionnaire de paquets APT.

Les administrateurs peuvent ainsi retrouver les transactions précédentes et consulter les informations relatives aux modifications des paquets.

Cette fonctionnalité peut notamment faciliter le diagnostic lorsqu'un dysfonctionnement apparaît après une mise à jour.

## 7. Des améliorations du Software-Defined Networking (SDN)

Proxmox continue de faire évoluer sa solution de réseau défini par logiciel.

### Isolation réseau avec les VRF

Les zones SDN de type Simple peuvent désormais utiliser une instance VRF (Virtual Routing and Forwarding) dédiée.

Une VRF permet de disposer d'une table de routage indépendante sur un même équipement.

Cette fonctionnalité facilite :

- l'isolation des réseaux ;
- la segmentation des infrastructures ;
- la configuration de routes statiques spécifiques ;
- la séparation des environnements et des flux réseau.

Elle présente un intérêt particulier pour les infrastructures mutualisées et les environnements multi-clients.

### Une meilleure visibilité des tunnels WireGuard

L'état des interfaces et des pairs WireGuard associés aux fabrics SDN peut désormais être consulté directement depuis l'interface d'administration.

Cette amélioration facilite la supervision et le diagnostic des tunnels.

## 8. Un installateur plus flexible

L'assistant d'installation de Proxmox VE 9.3 permet désormais de configurer directement :

- une agrégation de liens réseau (Bonding) ;
- un VLAN pour le réseau d'administration ;
- une combinaison des deux technologies.

Il devient ainsi possible d'intégrer un hyperviseur dans une infrastructure réseau avancée dès son installation.

Cette amélioration concerne les différentes méthodes d'installation, notamment l'installateur graphique, l'installateur en mode texte et l'installation automatisée.

Elle évite certaines opérations de configuration réseau après le premier démarrage.

## 9. Une gestion plus flexible des notifications

Le système de notifications évolue également avec la possibilité d'imbriquer des règles de correspondance.

L'interface permet notamment de réorganiser ces règles par glisser-déposer.

Les administrateurs peuvent ainsi définir des conditions plus complexes pour déterminer quels événements doivent déclencher une notification.

Cela permet, par exemple, de distinguer les alertes critiques des événements liés aux sauvegardes ou aux opérations de maintenance.

## 10. Ceph Umbrella 21.2 disponible en préversion

Proxmox VE 9.3 propose deux branches principales de Ceph :

| Version | Statut |
| --- | --- |
| Ceph Tentacle 20.2 | Stable |
| Ceph Umbrella 21.2 | Technology Preview |

Ceph Umbrella apporte notamment des évolutions concernant les performances des opérations d'entrée-sortie avec Erasure Coding, la sécurité de l'authentification CephX et la gestion des clés.

Cependant, cette version étant proposée en préversion technologique, son utilisation doit être privilégiée dans des environnements de test.

Pour les infrastructures de production, Ceph Tentacle reste le choix recommandé.

## 11. Importation simplifiée des machines virtuelles

Proxmox VE 9.3 permet également d'importer directement des fichiers OVF et OVA depuis les stockages de type fichier, à partir de l'interface Web.

Cette fonctionnalité facilite l'intégration de machines virtuelles provenant d'autres plateformes de virtualisation, notamment VMware.

Elle constitue une amélioration supplémentaire pour les entreprises souhaitant migrer progressivement leurs infrastructures vers Proxmox VE.

## 12. Proxmox Offline Mirror 0.8

En parallèle, Proxmox Offline Mirror évolue vers la version 0.8.

Cet outil permet de maintenir des dépôts de paquets locaux pour des infrastructures ne disposant pas d'un accès direct à Internet.

Cette version améliore notamment :

- le nettoyage automatique des anciens snapshots ;
- l'identification du dernier snapshot disponible ;
- la synchronisation parallèle des paquets ;
- la consommation de mémoire lors des synchronisations.

Ces évolutions sont particulièrement intéressantes pour les infrastructures isolées et les environnements soumis à des contraintes de sécurité importantes.

## 13. Comment mettre à jour vers Proxmox VE 9.3 ?

### Vérifier la version actuelle

Avant de commencer, il est possible de vérifier la version installée avec la commande suivante :

```bash
pveversion
```

Pour obtenir la liste détaillée des versions des composants :

```bash
pveversion -v
```

### Mettre à jour depuis Proxmox VE 9.x

La mise à jour peut être réalisée directement à l'aide du gestionnaire de paquets APT.

Actualiser la liste des paquets disponibles :

```bash
apt update
```

Consulter les mises à jour disponibles :

```bash
apt list --upgradable
```

Installer les mises à jour :

```bash
apt full-upgrade
```

Redémarrer le serveur si nécessaire, notamment après une mise à jour du noyau :

```bash
reboot
```

Vérifier ensuite la version installée et le noyau utilisé :

```bash
pveversion
uname -r
```

La mise à jour peut également être réalisée depuis l'interface Web, dans la rubrique **Updates** du nœud concerné.

### Mettre à jour depuis Proxmox VE 8.x

Le passage de Proxmox VE 8 à Proxmox VE 9 constitue une mise à niveau majeure, impliquant notamment le passage de Debian 12 Bookworm à Debian 13 Trixie.

Une procédure spécifique doit donc être respectée.

Il est notamment nécessaire d'utiliser l'outil de vérification :

```bash
pve8to9 --full
```

La documentation officielle est disponible à l'adresse suivante :

[Guide de migration de Proxmox VE 8 vers Proxmox VE 9](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9)

À noter que Proxmox VE 8 a atteint sa fin de support en août 2026. Il est donc recommandé de planifier rapidement la migration des infrastructures utilisant encore cette version.

## 14. Les précautions avant la mise à jour

Avant de mettre à jour une infrastructure de production, il est recommandé de :

- sauvegarder les machines virtuelles et les conteneurs ;
- vérifier le bon fonctionnement des sauvegardes ;
- contrôler l'état des stockages ;
- vérifier la configuration des dépôts APT ;
- contrôler le quorum du cluster ;
- vérifier l'état de Ceph, si celui-ci est utilisé ;
- tester la mise à jour dans un environnement de préproduction ;
- mettre à jour les nœuds du cluster progressivement.

Pour vérifier l'état d'un cluster :

```bash
pvecm status
```

Pour vérifier l'état des ressources HA :

```bash
ha-manager status
```

Pour vérifier l'état des stockages :

```bash
pvesm status
```

Pour une infrastructure utilisant Ceph :

```bash
ceph -s
```

Dans un cluster, il est préférable de procéder nœud par nœud afin de limiter les interruptions de service et de préserver le quorum.

## 15. Faut-il passer à Proxmox VE 9.3 ?

Cette nouvelle version apporte des évolutions particulièrement intéressantes pour les administrateurs d'infrastructures professionnelles.

| Fonctionnalité | Intérêt |
| --- | --- |
| Gestion centralisée du SAN | Administration simplifiée du stockage |
| Snapshots LVM | Plus de flexibilité pour les stockages partagés |
| Mode maintenance HA | Maintenance des clusters simplifiée |
| Identifiants uniques | Meilleur suivi des ressources |
| Historique APT | Diagnostic des mises à jour |
| Journal des accès API | Visibilité sur les automatisations |
| VRF dans le SDN | Meilleure isolation réseau |
| Bonding et VLAN à l'installation | Déploiement simplifié |
| Import OVF/OVA | Migration facilitée |

Pour un laboratoire personnel ou un environnement pédagogique, les améliorations de l'interface, du réseau et de l'installateur constituent déjà des raisons intéressantes de découvrir cette version.

Pour une infrastructure d'entreprise, les évolutions du stockage SAN, de la haute disponibilité et des outils de diagnostic représentent les principaux bénéfices.

Comme pour toute nouvelle version, il reste préférable de valider la mise à jour dans un environnement de test avant son déploiement en production.

## Conclusion

Proxmox VE 9.3 constitue une évolution importante de la plateforme de virtualisation open source.

Plutôt que de révolutionner son fonctionnement, cette version se concentre sur la simplification de l'administration, la maturité des fonctionnalités existantes et l'amélioration de son intégration dans les infrastructures professionnelles.

La gestion centralisée du stockage SAN, les snapshots LVM adaptés à la production, le mode maintenance HA et les nouvelles fonctionnalités réseau renforcent la pertinence de Proxmox VE comme alternative aux solutions de virtualisation propriétaires.

Proxmox confirme ainsi sa volonté de proposer une plateforme complète, ouverte et adaptée aussi bien aux laboratoires personnels qu'aux centres de données d'entreprise.

## Sources et liens utiles

- [Annonce officielle de Proxmox VE 9.3](https://www.proxmox.com/en/about/company-details/press-releases/proxmox-virtual-environment-9-3)
- [Forum officiel - Proxmox VE 9.3](https://forum.proxmox.com/threads/proxmox-virtual-environment-9-3-released.187800/)
- [Notes de version officielles](https://pve.proxmox.com/wiki/Roadmap#Proxmox_VE_9.3)
- [Vidéo officielle de présentation des nouveautés](https://www.proxmox.com/en/services/training-courses/videos/proxmox-virtual-environment/whats-new-in-proxmox-ve-9-3)
- [Téléchargement de Proxmox VE](https://www.proxmox.com/en/downloads)
- [Documentation officielle](https://pve.proxmox.com/pve-docs/)
