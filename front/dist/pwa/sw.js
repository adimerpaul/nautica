if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const d=e=>c(e,f),r={module:{uri:f},exports:n,require:d};s[f]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.a26ce4be.js",revision:"d4f69e568fc32089318e656fe63fc978"},{url:"assets/axios.feb6762e.js",revision:"93d95a6de9d48e12007e5b42cfb1b060"},{url:"assets/BoatsIndex.cd13be8e.js",revision:"87d97cc40be17f781fbdec876ba9a65d"},{url:"assets/ClientsIndex.8b2c3036.js",revision:"30492c7830b8b2e1c181f7cfedcd63b9"},{url:"assets/ClosePopup.dd71a0ed.js",revision:"8c283cec38afbc35f800c12d39b3faee"},{url:"assets/CompaniesIndex.58701672.js",revision:"c77d2c303d38209116ba124b5d8c868c"},{url:"assets/CrewsIndex.db09c30a.js",revision:"4bc47da70d19a6ba21adc8a2925dc70b"},{url:"assets/DebtorsIndex.b612d61a.js",revision:"acf1796d4a9e283c1fab0f5e6c8440f5"},{url:"assets/ErrorNotFound.57a52073.js",revision:"6ecc605b6c96d4e9c7775a87d3a4054a"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.2cae61da.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.b3039264.js",revision:"e9b784ff438c08c681a1803dab2bde3b"},{url:"assets/index.ed0e09ba.css",revision:"f4e79fcf1bdd86f5b4f2effccc09ede1"},{url:"assets/IndexPage.ed47c6e8.js",revision:"d6a6164360455fa9431a0a8e7554cbd2"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/LoginPage.fefb6867.js",revision:"6c84f1e9d859ddba83be51320c52d2f5"},{url:"assets/MainLayout.ecf8a14e.js",revision:"00b5c0a7a3280f14dae216c1c2c1eedf"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProductsIndex.ff36cb44.js",revision:"d7ff893de517f42ceb64dc67ff604d7b"},{url:"assets/QBadge.fd9841a1.js",revision:"2c9b28a685ddaecbc6bac5424e3b47e4"},{url:"assets/QBtnDropdown.b990fbc6.js",revision:"43d785dea21d6e5981852510a050d47b"},{url:"assets/QChip.6c3d612f.js",revision:"27ff8be748d90a38e44aa24b17bdbfd2"},{url:"assets/QForm.b3efc297.js",revision:"728f976f765f4698b0cf618c2b46212c"},{url:"assets/QImg.d8f263e2.js",revision:"cf4424272ad6d320759e7327fd014eb9"},{url:"assets/QList.53778565.js",revision:"41733970027ac67aa370d212f5cc5882"},{url:"assets/QMarkupTable.35ec11ee.js",revision:"c34bad1f4b05e3ca7af97b10b071ae14"},{url:"assets/QPageContainer.b85d6254.js",revision:"85fd4fc2e4f1de57db9a672e8c5f47c0"},{url:"assets/QSpace.23243f30.js",revision:"82975542e032c59150446573857ab8a5"},{url:"assets/QTooltip.9b5d394c.js",revision:"cb864de30fe98b3552ff03b0f6f2a08a"},{url:"assets/SalesIndex.966614f4.js",revision:"5f1678bbd54990f868e222c0f37584cb"},{url:"assets/use-fullscreen.7825d4f4.js",revision:"f5f4564fa4b939c2ef62dc56ea51166f"},{url:"assets/UsersIndex.d8149601.js",revision:"bf84873b3da380b04dd673e6e4d96e6b"},{url:"assets/ViajesIndex.805f71af.js",revision:"b9f01c24a74f3ab025db43711ac3c530"},{url:"assets/ViajesShow.ef4e4eb9.js",revision:"d0d4cb6b7f97df6f9fba6ca5c2802c0c"},{url:"favicon.ico",revision:"b93a952038dc47b1bc5e4d08df84057a"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"4e545869672b510a589907e1687074fa"},{url:"icons/apple-icon-152x152.png",revision:"b6ced122d65269b58192926403cd8458"},{url:"icons/apple-icon-167x167.png",revision:"882b3db83bfcb53af356d3f5e87af221"},{url:"icons/apple-icon-180x180.png",revision:"fc4186db8d69eed6734574a923f4c290"},{url:"icons/apple-launch-1080x2340.png",revision:"d671612fc9b5cf08185ab33445c8cd19"},{url:"icons/apple-launch-1125x2436.png",revision:"fe956b2186b05a644eaeeba8c5693cf4"},{url:"icons/apple-launch-1170x2532.png",revision:"62466b3a973a6e50ac5e623f3b444d71"},{url:"icons/apple-launch-1179x2556.png",revision:"2e0ec01c2ddff686dfc123dfb39c8185"},{url:"icons/apple-launch-1242x2208.png",revision:"276b835e88e9b2ce144c09c4d1fc6533"},{url:"icons/apple-launch-1242x2688.png",revision:"c7b967d8e7c611cd3f358c51fe1b71e0"},{url:"icons/apple-launch-1284x2778.png",revision:"08dde466e0982945512f00b62c08c120"},{url:"icons/apple-launch-1290x2796.png",revision:"a2c38e3efb1c336858d3591fe5530a42"},{url:"icons/apple-launch-1536x2048.png",revision:"04ea60fe532862062f33a53745359fd3"},{url:"icons/apple-launch-1620x2160.png",revision:"71b7eeab0bc8ed7788d698c423ed5238"},{url:"icons/apple-launch-1668x2224.png",revision:"1ffd24b68583e62892859c75891ae1a6"},{url:"icons/apple-launch-1668x2388.png",revision:"8feed74c2b9c5c548a432309da1df0dd"},{url:"icons/apple-launch-2048x2732.png",revision:"407c51b2c31726741eb2169850fd1bd1"},{url:"icons/apple-launch-750x1334.png",revision:"3b630b85fe49e43779da7c7d8d2742f3"},{url:"icons/apple-launch-828x1792.png",revision:"b30c67a535282e8eea2d451ef1b8d06d"},{url:"icons/favicon-128x128.png",revision:"6c20134ae7a88f19f0020f06221ffcd6"},{url:"icons/favicon-16x16.png",revision:"d8f7926b53ea01b5c552820238f2ea9e"},{url:"icons/favicon-32x32.png",revision:"ca9360724c09958d2e1f56c23a471d98"},{url:"icons/favicon-96x96.png",revision:"21c16beceda77da5f2e09333dd1b7615"},{url:"icons/icon-128x128.png",revision:"6c20134ae7a88f19f0020f06221ffcd6"},{url:"icons/icon-192x192.png",revision:"c854ed644050d1bc8be25a34ecc00455"},{url:"icons/icon-256x256.png",revision:"e92d851f07dcb76034b115b32ba406c6"},{url:"icons/icon-384x384.png",revision:"0922d3980afb839d11547a37b01cf3f3"},{url:"icons/icon-512x512.png",revision:"92d4b25b64e5ce54e9f8c16d51e71bb6"},{url:"icons/ms-icon-144x144.png",revision:"8cf0f65870f2248a400afbd86436c465"},{url:"icons/safari-pinned-tab.svg",revision:"8992e23d992efae62444ba269ef0dcb2"},{url:"images.png",revision:"83baaa0639830d8d14e032604c6c85d0"},{url:"index.html",revision:"b8caac21d9edb017088e3318ff670c8d"},{url:"logo.png",revision:"9107c00d7fee9040cf40cb13d4b0621c"},{url:"manifest.json",revision:"19d87ee72d623cd8fcaec87a466bd03c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
