if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const d=e=>a(e,f),r={module:{uri:f},exports:n,require:d};s[f]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.48c1ef9f.js",revision:"e423f79a275b200023d133284555fd48"},{url:"assets/axios.16ff5d79.js",revision:"80fc0683191c7869c0652637bc82d627"},{url:"assets/BoatDetails.36c373e6.js",revision:"c8923b9075f31cafbe0c750c33e7767c"},{url:"assets/BoatsIndex.901b1a08.js",revision:"bc9e86bba144302af3ecff1c09c7a342"},{url:"assets/ClientsIndex.2014ea27.js",revision:"2d83ea30bde30b3be6b5120bc71dd3dd"},{url:"assets/ClosePopup.d36fa7d1.js",revision:"89ae6b41898e84e513f2b52ff02b36d4"},{url:"assets/CompaniesIndex.78c58ba9.js",revision:"5113c21d517cea41769c5f42ad2bda05"},{url:"assets/CrewsIndex.e064d19b.js",revision:"202576c04df278a95e99145d58e3a928"},{url:"assets/DebtorsIndex.13c78fe2.js",revision:"dc8913635b8188f38499441c97516664"},{url:"assets/DialogGasto.7a0a8eb9.js",revision:"20a6f7d1bbe41e9669055c20f5054856"},{url:"assets/ErrorNotFound.6ede747e.js",revision:"5bc1336a7b2921faf10a219febd48fdf"},{url:"assets/fa-brands-400.3a8924cd.woff2",revision:"b6356c957274676e6571c1ff5e11c9a8"},{url:"assets/fa-brands-400.5656d596.ttf",revision:"1931427c23716bb4ff98d03627f7137c"},{url:"assets/fa-regular-400.2bccecf0.woff2",revision:"023a4a925fa3fce0f66b769ef6bbb264"},{url:"assets/fa-regular-400.5d02dc9b.ttf",revision:"a0cc1c8265e3163aa654a5284ea11ace"},{url:"assets/fa-solid-900.9fc85f3a.woff2",revision:"6c4eee562650e53cee32496bdfbe534b"},{url:"assets/fa-solid-900.fbbf06d7.ttf",revision:"25914cfeafced317e1a0372187fbb2b9"},{url:"assets/fa-v4compatibility.09663a36.ttf",revision:"71808e147dc6d82c198a4ba292c0cb69"},{url:"assets/fa-v4compatibility.4d4a2d7f.woff2",revision:"c9e50ccabe9e36f370272197595ea1e5"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.2cae61da.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.469a3ffb.css",revision:"9d3341f78dc80a47d711ec8fd77322ca"},{url:"assets/index.8afcd716.js",revision:"e6eb4e14be2fa35cebbc684a6c93343c"},{url:"assets/IndexPage.b8664b37.js",revision:"ad46fd60e858469a760e36310e867f88"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.864ab587.js",revision:"8d3b38f2b9ee0b887b6581fef09cf7fd"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/MainLayout.7964628b.js",revision:"12f2dc7bbc6f4f6a492674d60e12e123"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProductsIndex.67a2f348.js",revision:"9c280000ef646edbb48dc0ab7e58af6f"},{url:"assets/QBadge.01ce9440.js",revision:"3d5369e840228bc937dda832b54466f9"},{url:"assets/QBtnDropdown.26304116.js",revision:"dce770f71a9f616290c70c5508c7dd00"},{url:"assets/QChip.30feaa2a.js",revision:"7342d72c8bfc59447c17342487b5a332"},{url:"assets/QForm.6505c5cb.js",revision:"0cc67e4b867fcd0a2236d670dc89e72d"},{url:"assets/QImg.bff903e3.js",revision:"ad5d4ac0d03c3e7e21eacd868346878a"},{url:"assets/QList.360d5035.js",revision:"f0510a9ba5468db1d8d9cb8b7f14368d"},{url:"assets/QMarkupTable.2668a97e.js",revision:"b388b05d33f5eecbcef1895670433302"},{url:"assets/QPage.6bccda21.js",revision:"c6cbb796dc5268fb0311235b9bdf8b04"},{url:"assets/QPageContainer.7b8b4e5e.js",revision:"7e027975ea8108e35b4e37f66c2c39ff"},{url:"assets/QSpace.75a8aa0d.js",revision:"18a26dcf1e313da11b185a94308429b5"},{url:"assets/QTable.d80a3b07.js",revision:"7e3f8f9f289f1be4c1366488f1cce1d0"},{url:"assets/QTooltip.15cef1ac.js",revision:"3525469582e544bf12de4736a01770f5"},{url:"assets/SalesIndex.de48f6b4.js",revision:"a1e76ba92a1b5cc5f5c0f177fbf44c26"},{url:"assets/use-fullscreen.c27686ee.js",revision:"add1143d26cbc15d3c8c58fc18e5296a"},{url:"assets/UsersIndex.1fc762a3.js",revision:"0c97545fd5dc75a97d97164d0f31d12b"},{url:"assets/ViajesActivosIndex.2099d937.js",revision:"97b9b1b3974c0493410be86da6d4f85f"},{url:"assets/ViajesIndex.5612f5a1.js",revision:"c81127f74fc6b88d98cbb870eaa87ffe"},{url:"assets/ViajesShow.c8b74160.js",revision:"75e2f24fa5ff9bfef45a7c91e38391d0"},{url:"favicon.ico",revision:"600e16854300b0627d3bf90361c1f372"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"baa0f9fb4c66192d4873c979a0154c69"},{url:"icons/apple-icon-152x152.png",revision:"e1511a1ffd3deac4b1259a3345d118b3"},{url:"icons/apple-icon-167x167.png",revision:"c1a459197f6cae99edaea738b86846c0"},{url:"icons/apple-icon-180x180.png",revision:"7c322264d4fefc4379046190d461ad05"},{url:"icons/apple-launch-1080x2340.png",revision:"adc6a7398a59142b3b30f47dc5f516ab"},{url:"icons/apple-launch-1125x2436.png",revision:"0146dcdc063a0debde3eab60ce836626"},{url:"icons/apple-launch-1170x2532.png",revision:"49530acd7325276746329e42db6f4e6f"},{url:"icons/apple-launch-1179x2556.png",revision:"6fc630bf118d46da4bfce02252e5d837"},{url:"icons/apple-launch-1242x2208.png",revision:"7c8990f722a0bee8d8fe42f797d55a90"},{url:"icons/apple-launch-1242x2688.png",revision:"7f421d32024df3e492a81939cc68ab12"},{url:"icons/apple-launch-1284x2778.png",revision:"7b97f0bd4d1a38130a853366ab3aa0a2"},{url:"icons/apple-launch-1290x2796.png",revision:"16e3969a797dd3b2d8ec0c10e44db819"},{url:"icons/apple-launch-1536x2048.png",revision:"1026262ca3958150203675ac3c877506"},{url:"icons/apple-launch-1620x2160.png",revision:"d7fb7be25a3df873e512acaa0cd72aba"},{url:"icons/apple-launch-1668x2224.png",revision:"9308c0bfa52be6c06827e227e14f8865"},{url:"icons/apple-launch-1668x2388.png",revision:"b67e405b89bf17c07d76aa4ac7e914ef"},{url:"icons/apple-launch-2048x2732.png",revision:"7b3b3bd609f5784d2041c4e64613cbec"},{url:"icons/apple-launch-750x1334.png",revision:"3308e86505e8ef5a8f6e542f474a2bb2"},{url:"icons/apple-launch-828x1792.png",revision:"c4beaf486260ae7372258ae470d820d7"},{url:"icons/favicon-128x128.png",revision:"7182d7fe25de3ce6d4a57122ee9b7cd1"},{url:"icons/favicon-16x16.png",revision:"2f00dfd7f43fffc40a246173351c7829"},{url:"icons/favicon-32x32.png",revision:"0f961dc37e3b586b9edf390fa246093c"},{url:"icons/favicon-96x96.png",revision:"3471291ba68a1cf68ea8256d19639d54"},{url:"icons/icon-128x128.png",revision:"7182d7fe25de3ce6d4a57122ee9b7cd1"},{url:"icons/icon-192x192.png",revision:"98a3e49c90f9c89f204352679930cd2d"},{url:"icons/icon-256x256.png",revision:"dc76d24aad6c66321e18f904ad758666"},{url:"icons/icon-384x384.png",revision:"d6d361a12ea0184923cfbbef2e1b9e8a"},{url:"icons/icon-512x512.png",revision:"63d6973f7c4daba459825c94899c47f1"},{url:"icons/ms-icon-144x144.png",revision:"1707a112aa97c998b76d5d249e39e247"},{url:"icons/safari-pinned-tab.svg",revision:"4a64eb9d00e0920f44d74e2aa868fb8e"},{url:"images.png",revision:"83baaa0639830d8d14e032604c6c85d0"},{url:"index.html",revision:"2dac051d06d2afbd14db3e2dd496bf30"},{url:"logo.png",revision:"97c82da96c0d3bed5a360599ff2cd834"},{url:"manifest.json",revision:"8d30d0521488e46aa5b93f7cde970152"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
