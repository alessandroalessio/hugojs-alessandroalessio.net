---
title: Comandi Linux utili per Sviluppatori Web che si ritrovano a fare i sistemisti
author: Alessandro Alessio
type: post
date: 2017-09-01T09:15:48+00:00
url: /comandi-linux-utili-per-sviluppatori-web-che-si-ritrovano-a-fare-i-sistemisti/
featured_image: https://www.alessandroalessio.net/wp-content/uploads/2017/09/caspar-rubin-224229-Large-219x146.jpg
eazy_page_single_group:
  - 'a:1:{i:0;a:1:{s:9:"attach_id";i:0;}}'
dsq_thread_id:
  - 6111791274
rop_post_url_twitter:
  - 'https://www.alessandroalessio.net/comandi-linux-utili-per-sviluppatori-web-che-si-ritrovano-a-fare-i-sistemisti/?utm_source=ReviveOldPost&utm_medium=social&utm_campaign=ReviveOldPost'
rank_math_internal_links_processed:
  - 1
episode_type:
  - audio
mfn-post-intro:
  - 'a:1:{s:9:"post-meta";s:1:"1";}'
rank_math_permalink:
  - comandi-linux-utili-per-sviluppatori-web-che-si-ritrovano-a-fare-i-sistemisti
rank_math_seo_score:
  - 7
rank_math_robots:
  - 'a:1:{i:0;s:5:"index";}'
rank_math_advanced_robots:
  - 'a:3:{s:11:"max-snippet";s:2:"-1";s:17:"max-video-preview";s:2:"-1";s:17:"max-image-preview";s:5:"large";}'
rank_math_dont_show_seo_score:
  - off
rank_math_facebook_enable_image_overlay:
  - off
rank_math_facebook_image_overlay:
  - play
rank_math_twitter_use_facebook:
  - on
rank_math_twitter_card_type:
  - summary_large_image
rank_math_twitter_enable_image_overlay:
  - off
rank_math_twitter_image_overlay:
  - play
categories:
  - Informatica

---
Nella vita non sai mai, un giorno sei sviluppatore, l&#8217;altro sistemista e l&#8217;altro ancora (speriamo) un pizzaiolo.  
Ecco perché in aiuto alla mia memoria pressochè inesistente mi appresto a condividere un elenco di comandi che da sviluppatore ho trovato utili/comodi/necessari per chi si ritrova a fare il sistemista.

L&#8217;articolo è ovviamente in continuo aggiornamento essendo per me un promemoria

### Spazio residuo su server Linux

<pre>df -h</pre>

Ritorna un elenco di partizioni con spazio utilizzato e libero

&nbsp;

### Ottenere un elenco di cartelle con relativo peso su server Linux

<pre>du -h --max-depth=1 /directory</pre>

Ritorna un elenco di cartelle partendo dalla directory padre mostrando il peso di ognuna

&nbsp;

### Zip di cartelle/files su server Linux

<pre><span style="font-weight: 400;">Tar -zcvf archivio.tar.gz / directory/*</span></pre>

Comprime i files nella directory impostata in un archivio.tar.gz posizionato nella path in cui siete

&nbsp;

### Backup Database MySQL da riga di comando su server Linux

<pre><span style="font-weight: 400;">mysqldump -u user -p db_da_copiare &gt; backup.sql</span></pre>

Crea una copia del database da copiare nella root directory

&nbsp;

### Copiare files da server a server su Linux

<pre>mysqldump -u user -p db_da_copiare &gt; backup.sql</pre>

Crea una copia del database da copiare nella root directory

&nbsp;

### Ottenere il numero di  files in una cartella su server Linux

<pre><span style="font-weight: 400;">ls -l | grep -v ^l | wc -l</span></pre>

Ritorna il numero di files presenti in una cartella

&nbsp;

### Ottenere l&#8217;IP pubblico di un server Linux/Ubuntu

<pre>curl ipinfo.io/ip</pre>

Ritorna l&#8217;IP pubblico di un server Linux/Ubuntu tramite una chiamata CURL (Quindi l&#8217;estensione CURL deve essere abilitata