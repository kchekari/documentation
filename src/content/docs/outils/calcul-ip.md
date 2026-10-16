---
title: "Calculateur de masque IPv4"
sidebar:
  label: "Calculateur de masque IPv4"
tableOfContents: false
---
 <p>Entrez une adresse IP et un masque ou un CIDR (ex : 255.255.255.0 ou /24).</p>

  <label for="ip">Adresse IPv4 :</label>
  <input id="ip" value="192.168.1.10" placeholder="ex. 192.168.1.10" />

  <label for="mask">Masque ou CIDR :</label>
  <input id="mask" value="/24" placeholder="ex. /24 ou 255.255.255.0" />

  <button id="calc">Calculer</button>

  <div id="out"></div>

  <script>
    const byId = id => document.getElementById(id);

    function ip4ToInt(ip){
      const m = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
      if(!m) throw new Error("Adresse IPv4 invalide");
      const o = m.slice(1).map(Number);
      if(o.some(x=>x<0||x>255)) throw new Error("Octet hors plage 0–255");
      return ((o[0]<<24)>>>0) + (o[1]<<16) + (o[2]<<8) + o[3];
    }

    function intToIp4(int){return [24,16,8,0].map(s=>((int>>>s)&255)).join('.');}

    function maskToInt(mask){
      if(mask.startsWith('/')){
        const cidr = parseInt(mask.slice(1),10);
        if(cidr<0||cidr>32||isNaN(cidr)) throw new Error("CIDR invalide");
        return cidr===0?0:(0xFFFFFFFF<<(32-cidr))>>>0;
      }
      const m = mask.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
      if(!m) throw new Error("Masque invalide");
      const o = m.slice(1).map(Number);
      if(o.some(x=>x<0||x>255)) throw new Error("Masque invalide");
      const maskInt = ((o[0]<<24)>>>0) + (o[1]<<16) + (o[2]<<8) + o[3];
      const cidr = maskIntToCidr(maskInt);
      if(cidr===null) throw new Error("Masque non contigu");
      return maskInt;
    }

    function maskIntToCidr(mask){
      let seenZero=false,ones=0;
      for(let i=31;i>=0;i--){
        const bit=(mask>>>i)&1;
        if(bit===1){if(seenZero)return null;ones++;} else seenZero=true;
      }
      return ones;
    }

    function wildcardFromMaskInt(mask){return (~mask)>>>0;}

    function renderKv(container, items){
      container.innerHTML = items.map(([k,v])=>`<div><b>${k} :</b> ${v}</div>`).join('');
    }

    byId('calc').addEventListener('click',()=>{
      const out = byId('out');
      out.innerHTML='';
      try{
        const ip = byId('ip').value.trim();
        const maskInput = byId('mask').value.trim();
        const ipInt = ip4ToInt(ip);
        const maskInt = maskToInt(maskInput);
        const cidr = maskIntToCidr(maskInt);
        const wildcard = wildcardFromMaskInt(maskInt);
        const net = ipInt & maskInt;
        const bcast = net | (~maskInt >>> 0);
        const first = cidr===32? net : (net + 1) >>> 0;
        const last = cidr>=31? bcast : (bcast - 1) >>> 0;
        const hosts = cidr>=31? (cidr===31? 2:1) : (2**(32-cidr) - 2);

        renderKv(out,[
          ['Adresse', ip],
          ['Masque', intToIp4(maskInt)],
          ['CIDR', `/${cidr}`],
          ['Wildcard', intToIp4(wildcard)],
          ['Réseau', intToIp4(net)],
          ['Broadcast', intToIp4(bcast)],
          ['Première IP', intToIp4(first)],
          ['Dernière IP', intToIp4(last)],
          ['Hôtes utilisables', hosts]
        ]);
      }catch(e){
        out.innerHTML = `<p style='color:red'>${e.message}</p>`;
      }
    });
  </script>