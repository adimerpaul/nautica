if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let d={};const n=e=>a(e,f),r={module:{uri:f},exports:d,require:n};s[f]=Promise.all(c.map((e=>r[e]||n(e)))).then((e=>(i(...e),d)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.48c1ef9f.js",revision:"e423f79a275b200023d133284555fd48"},{url:"assets/axios.aa213d70.js",revision:"5a3b6c5887645fe6bd7788f4fe138d6b"},{url:"assets/BoatDetails.d2ea1a0e.js",revision:"824ad66185b0bb68820edd28bd83c725"},{url:"assets/BoatsIndex.90d56f27.js",revision:"e0538fcd836b59f6bb8fcec4d1817a34"},{url:"assets/Categories.149dcb65.js",revision:"a4e216bf377f993a1cb4ce2108f44167"},{url:"assets/ClientsIndex.6519acc3.js",revision:"4fddb9ff1d269fa5c4c3bce375334e9a"},{url:"assets/ClosePopup.e6798bbb.js",revision:"d4d20d0c32c78ca54b633eaa2c860c7d"},{url:"assets/CompaniesIndex.a74ed7b5.js",revision:"b5d32f530a9409b5f9e646c9635b94c0"},{url:"assets/CrewsIndex.e8d1f051.js",revision:"a6e9dc5c886dc7aca11e82b44272bab1"},{url:"assets/DebtorsIndex.eef8b2bc.js",revision:"a2ba8570d3899801ca3a28b974617f83"},{url:"assets/DialogGasto.441cb63b.js",revision:"93a3b540262a93ec5e3e1e3dff3d83e4"},{url:"assets/ErrorNotFound.f85e6d76.js",revision:"5b5555d7eb1139ba2e9a5f66a816c7d2"},{url:"assets/fa-brands-400.3a8924cd.woff2",revision:"b6356c957274676e6571c1ff5e11c9a8"},{url:"assets/fa-brands-400.5656d596.ttf",revision:"1931427c23716bb4ff98d03627f7137c"},{url:"assets/fa-regular-400.2bccecf0.woff2",revision:"023a4a925fa3fce0f66b769ef6bbb264"},{url:"assets/fa-regular-400.5d02dc9b.ttf",revision:"a0cc1c8265e3163aa654a5284ea11ace"},{url:"assets/fa-solid-900.9fc85f3a.woff2",revision:"6c4eee562650e53cee32496bdfbe534b"},{url:"assets/fa-solid-900.fbbf06d7.ttf",revision:"25914cfeafced317e1a0372187fbb2b9"},{url:"assets/fa-v4compatibility.09663a36.ttf",revision:"71808e147dc6d82c198a4ba292c0cb69"},{url:"assets/fa-v4compatibility.4d4a2d7f.woff2",revision:"c9e50ccabe9e36f370272197595ea1e5"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.2cae61da.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/GastosIndex.00877eb4.js",revision:"cf9d5a13aa7235617884917194e74402"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.22e72184.js",revision:"d99c6d080c28989f99652737a4850258"},{url:"assets/index.469a3ffb.css",revision:"9d3341f78dc80a47d711ec8fd77322ca"},{url:"assets/index.62c8ae17.js",revision:"0285ecdd85d2f7f5af4aac45facf7fab"},{url:"assets/index.b5e5b4ca.js",revision:"92741223032de49ccc9734cadd676391"},{url:"assets/IndexPage.8e78b413.js",revision:"7cc513a6b61c9da1fe9e4cbf4b7b1004"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/lodash.733f4815.js",revision:"762d303812961ad5060e0c8e69983edc"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.729e934e.js",revision:"59fcf24f1741c8cd4789676ce48cd27d"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/MainLayout.ca8b98c2.js",revision:"4f99a46d439f72aaf164ab1384356dcc"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/New.db45d2d6.js",revision:"afd8c062fa7e626d988a87e602df9608"},{url:"assets/ProductsIndex.0cb12cc6.js",revision:"d9b267ad3d3ccc2e38b393b30d0a4607"},{url:"assets/QBadge.4113afaf.js",revision:"e7f03a91056070004b975656e2bf4187"},{url:"assets/QBtnDropdown.047ce1e3.js",revision:"9c86543ba0500c367c42b4d6d0cf937e"},{url:"assets/QChip.ca8e4d3b.js",revision:"d1d5415450164ea3f1c5783ccd91caa7"},{url:"assets/QEditor.738958e8.js",revision:"03e174b0e0cf9530936094f4fa052ae8"},{url:"assets/QForm.cec82fa3.js",revision:"cc7a4617201a402503ef3356fba054ae"},{url:"assets/QImg.e7ea3067.js",revision:"cf3a70f12adb20a5add59d2ee44e14fa"},{url:"assets/QList.593472be.js",revision:"20c3887327b19cb39fe4927829c6aa83"},{url:"assets/QMarkupTable.dff4d85b.js",revision:"2ea6a469173050a9d6e79fe5c06dcede"},{url:"assets/QPage.8066df2b.js",revision:"150b36f6858ec282e13750573a6327db"},{url:"assets/QPageContainer.1fa2b5a2.js",revision:"d026668e62fc305a2f5754f61e20272d"},{url:"assets/QSelect.4c229364.js",revision:"39d8682af8d079c3121c3b4164a43a4b"},{url:"assets/QSpace.5b029d84.js",revision:"c46a9f845ca84d18c4b5958118983800"},{url:"assets/QTable.f6f190e3.js",revision:"aae47b8f4c2c8eb1298f23b74f7dfb10"},{url:"assets/QTooltip.c0e70048.js",revision:"a8cdd063b947db4a1b3562d9c8f7a567"},{url:"assets/ReportesIndex.8a29a9ee.js",revision:"d84b7efe0fb03bf436ffa8a792dde9e8"},{url:"assets/SalesIndex.b8d31085.js",revision:"781da8ad1bd9a4323bdfcffa7376ae47"},{url:"assets/use-fullscreen.b11cee87.js",revision:"39a9dac10e74669fb0480296f57ce9b9"},{url:"assets/UsersIndex.09a38159.js",revision:"8af9a63f1ed7f21c37ac322d0b704a6c"},{url:"assets/ViajesActivosIndex.73f78f05.js",revision:"05e76c74e6eff97337dd9bfba02354a9"},{url:"assets/ViajesConciliacion.511da133.js",revision:"9746f7a0aed178b7403e0e242eadfd8d"},{url:"assets/ViajesIndex.dd09a162.js",revision:"de1dc9fce2fae0407c7a3e23d7adc040"},{url:"assets/ViajesLance.6c8c18eb.js",revision:"aefccd88e9764c99f57f81d98a09e5ce"},{url:"assets/ViajesShow.92ff2843.js",revision:"b1aa9e899433fd939bffb9523e1331c4"},{url:"favicon.ico",revision:"600e16854300b0627d3bf90361c1f372"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"baa0f9fb4c66192d4873c979a0154c69"},{url:"icons/apple-icon-152x152.png",revision:"e1511a1ffd3deac4b1259a3345d118b3"},{url:"icons/apple-icon-167x167.png",revision:"c1a459197f6cae99edaea738b86846c0"},{url:"icons/apple-icon-180x180.png",revision:"7c322264d4fefc4379046190d461ad05"},{url:"icons/apple-launch-1080x2340.png",revision:"adc6a7398a59142b3b30f47dc5f516ab"},{url:"icons/apple-launch-1125x2436.png",revision:"0146dcdc063a0debde3eab60ce836626"},{url:"icons/apple-launch-1170x2532.png",revision:"49530acd7325276746329e42db6f4e6f"},{url:"icons/apple-launch-1179x2556.png",revision:"6fc630bf118d46da4bfce02252e5d837"},{url:"icons/apple-launch-1242x2208.png",revision:"7c8990f722a0bee8d8fe42f797d55a90"},{url:"icons/apple-launch-1242x2688.png",revision:"7f421d32024df3e492a81939cc68ab12"},{url:"icons/apple-launch-1284x2778.png",revision:"7b97f0bd4d1a38130a853366ab3aa0a2"},{url:"icons/apple-launch-1290x2796.png",revision:"16e3969a797dd3b2d8ec0c10e44db819"},{url:"icons/apple-launch-1536x2048.png",revision:"1026262ca3958150203675ac3c877506"},{url:"icons/apple-launch-1620x2160.png",revision:"d7fb7be25a3df873e512acaa0cd72aba"},{url:"icons/apple-launch-1668x2224.png",revision:"9308c0bfa52be6c06827e227e14f8865"},{url:"icons/apple-launch-1668x2388.png",revision:"b67e405b89bf17c07d76aa4ac7e914ef"},{url:"icons/apple-launch-2048x2732.png",revision:"7b3b3bd609f5784d2041c4e64613cbec"},{url:"icons/apple-launch-750x1334.png",revision:"3308e86505e8ef5a8f6e542f474a2bb2"},{url:"icons/apple-launch-828x1792.png",revision:"c4beaf486260ae7372258ae470d820d7"},{url:"icons/favicon-128x128.png",revision:"7182d7fe25de3ce6d4a57122ee9b7cd1"},{url:"icons/favicon-16x16.png",revision:"2f00dfd7f43fffc40a246173351c7829"},{url:"icons/favicon-32x32.png",revision:"0f961dc37e3b586b9edf390fa246093c"},{url:"icons/favicon-96x96.png",revision:"3471291ba68a1cf68ea8256d19639d54"},{url:"icons/icon-128x128.png",revision:"7182d7fe25de3ce6d4a57122ee9b7cd1"},{url:"icons/icon-192x192.png",revision:"98a3e49c90f9c89f204352679930cd2d"},{url:"icons/icon-256x256.png",revision:"dc76d24aad6c66321e18f904ad758666"},{url:"icons/icon-384x384.png",revision:"d6d361a12ea0184923cfbbef2e1b9e8a"},{url:"icons/icon-512x512.png",revision:"63d6973f7c4daba459825c94899c47f1"},{url:"icons/ms-icon-144x144.png",revision:"1707a112aa97c998b76d5d249e39e247"},{url:"icons/safari-pinned-tab.svg",revision:"4a64eb9d00e0920f44d74e2aa868fb8e"},{url:"images.png",revision:"83baaa0639830d8d14e032604c6c85d0"},{url:"index.html",revision:"4c874ac41285162b19aa3360a4de67cc"},{url:"logo.png",revision:"97c82da96c0d3bed5a360599ff2cd834"},{url:"manifest.json",revision:"8d30d0521488e46aa5b93f7cde970152"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
