if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let f={};const d=e=>c(e,n),r={module:{uri:n},exports:f,require:d};s[n]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(i(...e),f)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.a26ce4be.js",revision:"d4f69e568fc32089318e656fe63fc978"},{url:"assets/axios.d2f79c9b.js",revision:"89898c4db1f9fe8357eda675c3168421"},{url:"assets/BoatsIndex.3e06676d.js",revision:"b2537161f066ab39ef2617a580b15bca"},{url:"assets/ClientsIndex.12bc78cc.js",revision:"3490b8386906e13ce73494bbd2e59a5b"},{url:"assets/ClosePopup.9686089f.js",revision:"3d997c9bfd75c54ba5ed44a7b5eb2df7"},{url:"assets/CompaniesIndex.1a3f112e.js",revision:"d27aa931d5fe24fa23ac2a170d28d479"},{url:"assets/CrewsIndex.7b065ff6.js",revision:"399354fe9a049b647448dfcacd817a93"},{url:"assets/DebtorsIndex.6f63d2b8.js",revision:"7b8222d49461b0b6570ad7efe5e53f9f"},{url:"assets/ErrorNotFound.50abe5ca.js",revision:"59e119bf26696f8573e198d0b48fdb98"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.2cae61da.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.6f95fcdd.js",revision:"dd2038e745dab50c31fefa010fdb2bb2"},{url:"assets/index.ed0e09ba.css",revision:"f4e79fcf1bdd86f5b4f2effccc09ede1"},{url:"assets/IndexPage.a9b51676.js",revision:"0addd0273c1bca5583b2e6406bda179e"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.bacb46fa.js",revision:"a71e495c7070606c1550a7852bdd5b64"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/MainLayout.969e3843.js",revision:"48b339b305d06c07a4814cc2e451ce1e"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProductsIndex.0171cfbc.js",revision:"e4045fe00e1621657a07d366d908fd43"},{url:"assets/QBadge.769a2d28.js",revision:"6fb6f1b5887d437cd400ff0657270903"},{url:"assets/QBtnDropdown.a4602205.js",revision:"85ce0d6aa889a715cb96dd66768736a8"},{url:"assets/QChip.d6607c8a.js",revision:"874b68b226dd40bfe2e6cbc0b4fc0a40"},{url:"assets/QForm.1c0cbf19.js",revision:"ae03cba05b297ab01dfefd71804f2934"},{url:"assets/QImg.f786cc11.js",revision:"e6c4f76a0695f18c70f440d838cef1e9"},{url:"assets/QList.992c841a.js",revision:"0ca4b3dc5b3962f6e7ab68e6c8c1b332"},{url:"assets/QMarkupTable.48e824b5.js",revision:"9efc2b891d32fd4ca6cd66eb74a393cd"},{url:"assets/QPageContainer.ada261e0.js",revision:"b72ab2b83036c6904e3b9d6658f2e8f9"},{url:"assets/QSpace.22bfb77d.js",revision:"ce2e8cd09e87bc8634819717baab41ea"},{url:"assets/QTooltip.d48ccc40.js",revision:"4f4cf4e144f06ee73a5fd827224afd60"},{url:"assets/SalesIndex.dceea1f9.js",revision:"2d2cd42a9e47483c1b5646b9b6a53f09"},{url:"assets/use-fullscreen.41e7e009.js",revision:"dea9e9f9adff7749ab2556a03d53ac40"},{url:"assets/UsersIndex.025bc19d.js",revision:"701c874b657f2f1fd6963a79e274a70b"},{url:"assets/ViajesIndex.87b9cf38.js",revision:"9f30ed1a5b6d70811eebee6db9a86b52"},{url:"assets/ViajesShow.ca4b5915.js",revision:"89024816dc40bf514483a4ab9aef4319"},{url:"favicon.ico",revision:"b93a952038dc47b1bc5e4d08df84057a"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"4e545869672b510a589907e1687074fa"},{url:"icons/apple-icon-152x152.png",revision:"b6ced122d65269b58192926403cd8458"},{url:"icons/apple-icon-167x167.png",revision:"882b3db83bfcb53af356d3f5e87af221"},{url:"icons/apple-icon-180x180.png",revision:"fc4186db8d69eed6734574a923f4c290"},{url:"icons/apple-launch-1080x2340.png",revision:"d671612fc9b5cf08185ab33445c8cd19"},{url:"icons/apple-launch-1125x2436.png",revision:"fe956b2186b05a644eaeeba8c5693cf4"},{url:"icons/apple-launch-1170x2532.png",revision:"62466b3a973a6e50ac5e623f3b444d71"},{url:"icons/apple-launch-1179x2556.png",revision:"2e0ec01c2ddff686dfc123dfb39c8185"},{url:"icons/apple-launch-1242x2208.png",revision:"276b835e88e9b2ce144c09c4d1fc6533"},{url:"icons/apple-launch-1242x2688.png",revision:"c7b967d8e7c611cd3f358c51fe1b71e0"},{url:"icons/apple-launch-1284x2778.png",revision:"08dde466e0982945512f00b62c08c120"},{url:"icons/apple-launch-1290x2796.png",revision:"a2c38e3efb1c336858d3591fe5530a42"},{url:"icons/apple-launch-1536x2048.png",revision:"04ea60fe532862062f33a53745359fd3"},{url:"icons/apple-launch-1620x2160.png",revision:"71b7eeab0bc8ed7788d698c423ed5238"},{url:"icons/apple-launch-1668x2224.png",revision:"1ffd24b68583e62892859c75891ae1a6"},{url:"icons/apple-launch-1668x2388.png",revision:"8feed74c2b9c5c548a432309da1df0dd"},{url:"icons/apple-launch-2048x2732.png",revision:"407c51b2c31726741eb2169850fd1bd1"},{url:"icons/apple-launch-750x1334.png",revision:"3b630b85fe49e43779da7c7d8d2742f3"},{url:"icons/apple-launch-828x1792.png",revision:"b30c67a535282e8eea2d451ef1b8d06d"},{url:"icons/favicon-128x128.png",revision:"6c20134ae7a88f19f0020f06221ffcd6"},{url:"icons/favicon-16x16.png",revision:"d8f7926b53ea01b5c552820238f2ea9e"},{url:"icons/favicon-32x32.png",revision:"ca9360724c09958d2e1f56c23a471d98"},{url:"icons/favicon-96x96.png",revision:"21c16beceda77da5f2e09333dd1b7615"},{url:"icons/icon-128x128.png",revision:"6c20134ae7a88f19f0020f06221ffcd6"},{url:"icons/icon-192x192.png",revision:"c854ed644050d1bc8be25a34ecc00455"},{url:"icons/icon-256x256.png",revision:"e92d851f07dcb76034b115b32ba406c6"},{url:"icons/icon-384x384.png",revision:"0922d3980afb839d11547a37b01cf3f3"},{url:"icons/icon-512x512.png",revision:"92d4b25b64e5ce54e9f8c16d51e71bb6"},{url:"icons/ms-icon-144x144.png",revision:"8cf0f65870f2248a400afbd86436c465"},{url:"icons/safari-pinned-tab.svg",revision:"8992e23d992efae62444ba269ef0dcb2"},{url:"images.png",revision:"83baaa0639830d8d14e032604c6c85d0"},{url:"index.html",revision:"30ea7c3685d07b4c4f54a76c291108db"},{url:"logo.png",revision:"9107c00d7fee9040cf40cb13d4b0621c"},{url:"manifest.json",revision:"19d87ee72d623cd8fcaec87a466bd03c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
