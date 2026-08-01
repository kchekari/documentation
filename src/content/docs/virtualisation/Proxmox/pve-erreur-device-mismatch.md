---
title: "Proxmox - Erreur Device Mismatch detected"
tableOfContents: false
sidebar:
  label: "PVE - Erreur Device Mismatch"
---
Sur un stockage, j’ai l’erreur suivante :
```bash
root@pve11:~# pvs
  WARNING: Device mismatch detected for datastore-pve13/thinpool-datastore-pve13_tmeta which is accessing /dev/sdd instead of /dev/mapper/pve13.
  WARNING: Device mismatch detected for datastore-pve13/thinpool-datastore-pve13_tdata which is accessing /dev/sdd instead of /dev/mapper/pve13.
  WARNING: Device mismatch detected for datastore-pve12/thinpool-datastore-pve12_tmeta which is accessing /dev/sdc instead of /dev/mapper/pve12.
  WARNING: Device mismatch detected for datastore-pve12/thinpool-datastore-pve12_tdata which is accessing /dev/sdc instead of /dev/mapper/pve12.
```

Sauvegarde du fichier lvm.conf
```bash
cp /etc/lvm/lvm.conf /etc/lvm/lvm.conf.bak.$(date +%F)
```

Remplacer le bloc Devices par :
```bash	
devices {
    obtain_device_list_from_udev = 1
    preferred_names = [ "^/dev/mapper/", "^/dev/dm-[0-9]+$" ]
 
    # On SCANNE uniquement ces PV (adapte si un nom change un jour)
    filter = [
        "a|^/dev/mapper/pve11$|",
        "a|^/dev/mapper/pve12$|",
        "a|^/dev/mapper/pve13$|",
        "a|^/dev/mapper/pve-profs$|",
        "a|^/dev/nvme0n1p3$|",   # PV local du VG 'pve'
        "r|.*|"
    ]
 
    # À l'exécution, on n'OUVRE que ceci ; on rejette les doublons /dev/sdX
    global_filter = [
        "a|^/dev/mapper/.*|",
        "a|^/dev/dm-[0-9]+$|",
        "a|^/dev/nvme0n1p3$|",   # PV local du VG 'pve'
        "r|^/dev/sd.*|",
        "r|/dev/zd.*|",          # zvols ZFS
        "r|/dev/rbd.*|"          # RBD Ceph
    ]
}
```