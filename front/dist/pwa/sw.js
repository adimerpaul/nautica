if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const n=e=>a(e,d),r={module:{uri:d},exports:f,require:n};s[d]=Promise.all(c.map((e=>r[e]||n(e)))).then((e=>(i(...e),f)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.48c1ef9f.js",revision:"e423f79a275b200023d133284555fd48"},{url:"assets/axios.21f85b91.js",revision:"8119123e364d7ec8b4c4c984b6d5f4eb"},{url:"assets/BoatDetails.9acdc359.js",revision:"9a09f332b9bf86171bc2ec3d6a076df6"},{url:"assets/BoatsIndex.96863957.js",revision:"74de57d7f3942520fe30fd092ac9313b"},{url:"assets/Categories.c9a19772.js",revision:"f81d88826d14f45d4d9b6076ed639bfc"},{url:"assets/ClientsIndex.92d2e3f0.js",revision:"1854c229046ce0ee978f94fd7bcc5b1e"},{url:"assets/ClosePopup.bf2a9e3b.js",revision:"b96abc1d097c68d1c4cb65a852c46888"},{url:"assets/CompaniesIndex.bc247a86.js",revision:"b35e54663d04efc84d7b8eeaef65b20d"},{url:"assets/CrewsIndex.a8e99e4b.js",revision:"5a661457114ec3d5a02dfbe0f10b7cb1"},{url:"assets/DebtorsIndex.4281323c.js",revision:"3364d934c63892478d2e188edd52135e"},{url:"assets/DialogGasto.1e3d658f.js",revision:"37199f9d9061cf1ef495b024966abc01"},{url:"assets/ErrorNotFound.45b692d8.js",revision:"97a4a6eeed8c0b2c15ef6b1087057b51"},{url:"assets/fa-brands-400.3a8924cd.woff2",revision:"b6356c957274676e6571c1ff5e11c9a8"},{url:"assets/fa-brands-400.5656d596.ttf",revision:"1931427c23716bb4ff98d03627f7137c"},{url:"assets/fa-regular-400.2bccecf0.woff2",revision:"023a4a925fa3fce0f66b769ef6bbb264"},{url:"assets/fa-regular-400.5d02dc9b.ttf",revision:"a0cc1c8265e3163aa654a5284ea11ace"},{url:"assets/fa-solid-900.9fc85f3a.woff2",revision:"6c4eee562650e53cee32496bdfbe534b"},{url:"assets/fa-solid-900.fbbf06d7.ttf",revision:"25914cfeafced317e1a0372187fbb2b9"},{url:"assets/fa-v4compatibility.09663a36.ttf",revision:"71808e147dc6d82c198a4ba292c0cb69"},{url:"assets/fa-v4compatibility.4d4a2d7f.woff2",revision:"c9e50ccabe9e36f370272197595ea1e5"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.2cae61da.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/GastosIndex.47388332.js",revision:"c4e7534493e51c0624fbd2ac935597a6"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.22e72184.js",revision:"d99c6d080c28989f99652737a4850258"},{url:"assets/index.469a3ffb.css",revision:"9d3341f78dc80a47d711ec8fd77322ca"},{url:"assets/index.9b15af49.js",revision:"027883b3116979a888e0b5f0166b0c19"},{url:"assets/index.d0cdc383.js",revision:"4d32d9d419247ea52fa5eda12d8b8def"},{url:"assets/IndexPage.069a438b.js",revision:"ef8edc30f0f5b2afe15b2980bc0b3a64"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/lodash.733f4815.js",revision:"762d303812961ad5060e0c8e69983edc"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.c6ac24f9.js",revision:"ff8f5b20bb1c88e55ed42c6259cef359"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/MainLayout.451f9710.js",revision:"a364758067d9c9945837ed0a789db70d"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/New.972f85d6.js",revision:"f9cb34a34338a7ea84ace4d6b4f0ede9"},{url:"assets/ProductsIndex.a7abf108.js",revision:"e452304f375030ca9df4de292fa783ac"},{url:"assets/QBadge.2292052b.js",revision:"0915c3f53ac3209bb2506168ff249bf6"},{url:"assets/QBtnDropdown.f0870783.js",revision:"1ad407f7431a194524395c654c2782aa"},{url:"assets/QChip.dfad0562.js",revision:"2e740116017fb1f60677be61776ce5bc"},{url:"assets/QEditor.d5cdca40.js",revision:"f184cb82bab6f873eb7165f8cacf8fe4"},{url:"assets/QForm.54665059.js",revision:"8c16798837749580b5fcde4e526c6dea"},{url:"assets/QImg.9b0b0303.js",revision:"69035183c208dea7de74e75e0a61eee1"},{url:"assets/QList.53b2dad9.js",revision:"d4679ebd49f0c6c45e7ef6cb6776dbd9"},{url:"assets/QMarkupTable.8263b7a1.js",revision:"8de04f9551def71d294e2e9c513afb20"},{url:"assets/QPage.ef29aaa2.js",revision:"f5b4c7eddf3e2230c20f77421a4bb4a0"},{url:"assets/QPageContainer.5ae2ed25.js",revision:"07d203ff6d00b4c191813ae3cd3972e1"},{url:"assets/QSelect.0793eb75.js",revision:"ec5fdb873735ce673398035c950b3f63"},{url:"assets/QSpace.a0dd195b.js",revision:"31f980368ceebd1259fe89e21ba90a40"},{url:"assets/QTable.47cbe813.js",revision:"70f90c6ef4a358c2f5ccbc1d97b9908f"},{url:"assets/QTooltip.6c666962.js",revision:"8dcb26e2c347cecd03e27fdc753306b3"},{url:"assets/ReportesIndex.65434fc1.js",revision:"24b44ae76c97cd417b8f4a9c17ad8deb"},{url:"assets/SalesIndex.1ad29bac.js",revision:"dae30dd81deb6c66ce1113c026769201"},{url:"assets/use-fullscreen.33ab63bc.js",revision:"d98a6483946afad269d4df9190d41a0e"},{url:"assets/UsersIndex.46f5981e.js",revision:"98118b0785df063cc6e36be0cb218136"},{url:"assets/ViajesActivosIndex.34323ddb.js",revision:"75c16e9bc84fecc0464b4c16570032cf"},{url:"assets/ViajesConciliacion.71ddcae2.js",revision:"c30ddde8e1109e3db0776aca2f9c628a"},{url:"assets/ViajesIndex.65113376.js",revision:"447cb9a1b95c61aeac8b707cfd060f5e"},{url:"assets/ViajesLance.3c7b0db3.js",revision:"73f627126a9f586634b84aa978dce91b"},{url:"assets/ViajesShow.3aa2ddcb.js",revision:"d92eb4ba3643c180a3f12bec76209d17"},{url:"favicon.ico",revision:"600e16854300b0627d3bf90361c1f372"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"baa0f9fb4c66192d4873c979a0154c69"},{url:"icons/apple-icon-152x152.png",revision:"e1511a1ffd3deac4b1259a3345d118b3"},{url:"icons/apple-icon-167x167.png",revision:"c1a459197f6cae99edaea738b86846c0"},{url:"icons/apple-icon-180x180.png",revision:"7c322264d4fefc4379046190d461ad05"},{url:"icons/apple-launch-1080x2340.png",revision:"adc6a7398a59142b3b30f47dc5f516ab"},{url:"icons/apple-launch-1125x2436.png",revision:"0146dcdc063a0debde3eab60ce836626"},{url:"icons/apple-launch-1170x2532.png",revision:"49530acd7325276746329e42db6f4e6f"},{url:"icons/apple-launch-1179x2556.png",revision:"6fc630bf118d46da4bfce02252e5d837"},{url:"icons/apple-launch-1242x2208.png",revision:"7c8990f722a0bee8d8fe42f797d55a90"},{url:"icons/apple-launch-1242x2688.png",revision:"7f421d32024df3e492a81939cc68ab12"},{url:"icons/apple-launch-1284x2778.png",revision:"7b97f0bd4d1a38130a853366ab3aa0a2"},{url:"icons/apple-launch-1290x2796.png",revision:"16e3969a797dd3b2d8ec0c10e44db819"},{url:"icons/apple-launch-1536x2048.png",revision:"1026262ca3958150203675ac3c877506"},{url:"icons/apple-launch-1620x2160.png",revision:"d7fb7be25a3df873e512acaa0cd72aba"},{url:"icons/apple-launch-1668x2224.png",revision:"9308c0bfa52be6c06827e227e14f8865"},{url:"icons/apple-launch-1668x2388.png",revision:"b67e405b89bf17c07d76aa4ac7e914ef"},{url:"icons/apple-launch-2048x2732.png",revision:"7b3b3bd609f5784d2041c4e64613cbec"},{url:"icons/apple-launch-750x1334.png",revision:"3308e86505e8ef5a8f6e542f474a2bb2"},{url:"icons/apple-launch-828x1792.png",revision:"c4beaf486260ae7372258ae470d820d7"},{url:"icons/favicon-128x128.png",revision:"7182d7fe25de3ce6d4a57122ee9b7cd1"},{url:"icons/favicon-16x16.png",revision:"2f00dfd7f43fffc40a246173351c7829"},{url:"icons/favicon-32x32.png",revision:"0f961dc37e3b586b9edf390fa246093c"},{url:"icons/favicon-96x96.png",revision:"3471291ba68a1cf68ea8256d19639d54"},{url:"icons/icon-128x128.png",revision:"7182d7fe25de3ce6d4a57122ee9b7cd1"},{url:"icons/icon-192x192.png",revision:"98a3e49c90f9c89f204352679930cd2d"},{url:"icons/icon-256x256.png",revision:"dc76d24aad6c66321e18f904ad758666"},{url:"icons/icon-384x384.png",revision:"d6d361a12ea0184923cfbbef2e1b9e8a"},{url:"icons/icon-512x512.png",revision:"63d6973f7c4daba459825c94899c47f1"},{url:"icons/ms-icon-144x144.png",revision:"1707a112aa97c998b76d5d249e39e247"},{url:"icons/safari-pinned-tab.svg",revision:"4a64eb9d00e0920f44d74e2aa868fb8e"},{url:"images.png",revision:"83baaa0639830d8d14e032604c6c85d0"},{url:"index.html",revision:"e3d65e64ef00f322a6b228fe63585ad3"},{url:"logo.png",revision:"97c82da96c0d3bed5a360599ff2cd834"},{url:"manifest.json",revision:"8d30d0521488e46aa5b93f7cde970152"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
