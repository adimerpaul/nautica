if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const n=e=>a(e,f),r={module:{uri:f},exports:d,require:n};s[f]=Promise.all(c.map((e=>r[e]||n(e)))).then((e=>(i(...e),d)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.48c1ef9f.js",revision:"e423f79a275b200023d133284555fd48"},{url:"assets/axios.5541acdf.js",revision:"b086cf26c90b7f7d75c0d5f8741d9917"},{url:"assets/BoatDetails.3478d4e7.js",revision:"b2faab9dad16f91409c155935806f852"},{url:"assets/BoatsIndex.29a71afe.js",revision:"658f49b53d3937db6434d203a791ff92"},{url:"assets/ClientsIndex.a8b80a5b.js",revision:"89900cc06193656cb68cbac767ae7575"},{url:"assets/ClosePopup.02060ed4.js",revision:"f55435ad83c09771f52c020e9689b35e"},{url:"assets/CompaniesIndex.c126ab82.js",revision:"4e0073b0ba173787731a4930837676fd"},{url:"assets/CrewsIndex.d4ce0bff.js",revision:"cb6e8abfc8f665d7a50f9bf885794519"},{url:"assets/DebtorsIndex.baaabf19.js",revision:"d45a4e86275c9fa3c76faf1f2bcba986"},{url:"assets/DialogGasto.e0333a41.js",revision:"5b7f3e06e6c2cfe0c82462203f99c4f6"},{url:"assets/ErrorNotFound.bd01f544.js",revision:"0ec6c5feb5eb04a6d50974d05274c435"},{url:"assets/fa-brands-400.3a8924cd.woff2",revision:"b6356c957274676e6571c1ff5e11c9a8"},{url:"assets/fa-brands-400.5656d596.ttf",revision:"1931427c23716bb4ff98d03627f7137c"},{url:"assets/fa-regular-400.2bccecf0.woff2",revision:"023a4a925fa3fce0f66b769ef6bbb264"},{url:"assets/fa-regular-400.5d02dc9b.ttf",revision:"a0cc1c8265e3163aa654a5284ea11ace"},{url:"assets/fa-solid-900.9fc85f3a.woff2",revision:"6c4eee562650e53cee32496bdfbe534b"},{url:"assets/fa-solid-900.fbbf06d7.ttf",revision:"25914cfeafced317e1a0372187fbb2b9"},{url:"assets/fa-v4compatibility.09663a36.ttf",revision:"71808e147dc6d82c198a4ba292c0cb69"},{url:"assets/fa-v4compatibility.4d4a2d7f.woff2",revision:"c9e50ccabe9e36f370272197595ea1e5"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.2cae61da.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.469a3ffb.css",revision:"9d3341f78dc80a47d711ec8fd77322ca"},{url:"assets/index.8a3afe9b.js",revision:"cc2d9222451d110b68474ddc322fb23b"},{url:"assets/IndexPage.f58c1385.js",revision:"528348e451675c2cdd7f61a95351e744"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.6755b4af.js",revision:"69469f8c35c2fb2a51a5cf7cabaa0874"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/MainLayout.c9ced500.js",revision:"fc57d4046f14d8690b6bf04dc694cd68"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProductsIndex.887cc024.js",revision:"1c931dc8802a56a38dc722165568e069"},{url:"assets/QBadge.f71da4d3.js",revision:"9f1d12f7b7464e2d99259cde5b50ae11"},{url:"assets/QBtnDropdown.1750c6db.js",revision:"5368b3b3b5efbd6a0466a1db4a7515a4"},{url:"assets/QChip.cf1d63f6.js",revision:"2acd78f5fa872f05112e153f4b7b411d"},{url:"assets/QForm.d589f575.js",revision:"b251606dd19ddcb83ae23d5aa0636937"},{url:"assets/QImg.11b32b9c.js",revision:"28f96ae25d6102e0b4de687a5dd3dfc3"},{url:"assets/QList.e2fd292f.js",revision:"8d016d5ad4d97ff4b2768cbfedd2db17"},{url:"assets/QMarkupTable.2e831aab.js",revision:"c0044f6a2d30b845673f394d337ede5f"},{url:"assets/QPage.d875e791.js",revision:"edf2fd55d671a7fd2f24a03c4d86bf40"},{url:"assets/QPageContainer.a7d17740.js",revision:"b3f37e9ef990b63122f75579331dac3a"},{url:"assets/QSpace.cfe73c1c.js",revision:"7125eda183b44d9ba354baba86365191"},{url:"assets/QTable.ae68e1b0.js",revision:"fd6839eec36b40ea9cb0bb6bf9116ec2"},{url:"assets/QTooltip.b53c93f5.js",revision:"150edae5a9f7aa54ef24469b42ec2c27"},{url:"assets/SalesIndex.c978eaaf.js",revision:"e69bbddb96683011124398870d41c1c4"},{url:"assets/use-fullscreen.dee4e3ef.js",revision:"99bb77edb1cc78bb814fac8ebaa1dde2"},{url:"assets/UsersIndex.665e3a12.js",revision:"c73255837be06a654f5873f76ad48561"},{url:"assets/ViajesActivosIndex.a331e4a6.js",revision:"352ec3eb76b7c6be2df2acee57fdc2a5"},{url:"assets/ViajesIndex.da5119cd.js",revision:"ab7960217a8761f28ab006f0a0910763"},{url:"assets/ViajesShow.1e8d8ed1.js",revision:"ee0178f3b5782e9c3109b61cbdfd455d"},{url:"favicon.ico",revision:"600e16854300b0627d3bf90361c1f372"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"baa0f9fb4c66192d4873c979a0154c69"},{url:"icons/apple-icon-152x152.png",revision:"e1511a1ffd3deac4b1259a3345d118b3"},{url:"icons/apple-icon-167x167.png",revision:"c1a459197f6cae99edaea738b86846c0"},{url:"icons/apple-icon-180x180.png",revision:"7c322264d4fefc4379046190d461ad05"},{url:"icons/apple-launch-1080x2340.png",revision:"adc6a7398a59142b3b30f47dc5f516ab"},{url:"icons/apple-launch-1125x2436.png",revision:"0146dcdc063a0debde3eab60ce836626"},{url:"icons/apple-launch-1170x2532.png",revision:"49530acd7325276746329e42db6f4e6f"},{url:"icons/apple-launch-1179x2556.png",revision:"6fc630bf118d46da4bfce02252e5d837"},{url:"icons/apple-launch-1242x2208.png",revision:"7c8990f722a0bee8d8fe42f797d55a90"},{url:"icons/apple-launch-1242x2688.png",revision:"7f421d32024df3e492a81939cc68ab12"},{url:"icons/apple-launch-1284x2778.png",revision:"7b97f0bd4d1a38130a853366ab3aa0a2"},{url:"icons/apple-launch-1290x2796.png",revision:"16e3969a797dd3b2d8ec0c10e44db819"},{url:"icons/apple-launch-1536x2048.png",revision:"1026262ca3958150203675ac3c877506"},{url:"icons/apple-launch-1620x2160.png",revision:"d7fb7be25a3df873e512acaa0cd72aba"},{url:"icons/apple-launch-1668x2224.png",revision:"9308c0bfa52be6c06827e227e14f8865"},{url:"icons/apple-launch-1668x2388.png",revision:"b67e405b89bf17c07d76aa4ac7e914ef"},{url:"icons/apple-launch-2048x2732.png",revision:"7b3b3bd609f5784d2041c4e64613cbec"},{url:"icons/apple-launch-750x1334.png",revision:"3308e86505e8ef5a8f6e542f474a2bb2"},{url:"icons/apple-launch-828x1792.png",revision:"c4beaf486260ae7372258ae470d820d7"},{url:"icons/favicon-128x128.png",revision:"7182d7fe25de3ce6d4a57122ee9b7cd1"},{url:"icons/favicon-16x16.png",revision:"2f00dfd7f43fffc40a246173351c7829"},{url:"icons/favicon-32x32.png",revision:"0f961dc37e3b586b9edf390fa246093c"},{url:"icons/favicon-96x96.png",revision:"3471291ba68a1cf68ea8256d19639d54"},{url:"icons/icon-128x128.png",revision:"7182d7fe25de3ce6d4a57122ee9b7cd1"},{url:"icons/icon-192x192.png",revision:"98a3e49c90f9c89f204352679930cd2d"},{url:"icons/icon-256x256.png",revision:"dc76d24aad6c66321e18f904ad758666"},{url:"icons/icon-384x384.png",revision:"d6d361a12ea0184923cfbbef2e1b9e8a"},{url:"icons/icon-512x512.png",revision:"63d6973f7c4daba459825c94899c47f1"},{url:"icons/ms-icon-144x144.png",revision:"1707a112aa97c998b76d5d249e39e247"},{url:"icons/safari-pinned-tab.svg",revision:"4a64eb9d00e0920f44d74e2aa868fb8e"},{url:"images.png",revision:"83baaa0639830d8d14e032604c6c85d0"},{url:"index.html",revision:"9668677fcc3c613f3e9e094e81ff1e95"},{url:"logo.png",revision:"97c82da96c0d3bed5a360599ff2cd834"},{url:"manifest.json",revision:"8d30d0521488e46aa5b93f7cde970152"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
