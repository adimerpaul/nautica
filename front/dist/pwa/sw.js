if(!self.define){let e,c={};const s=(s,a)=>(s=new URL(s+".js",a).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let d={};const f=e=>s(e,n),o={module:{uri:n},exports:d,require:f};c[n]=Promise.all(a.map((e=>o[e]||f(e)))).then((e=>(i(...e),d)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"prestamo"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.acf456db.js",revision:"c849ad69e33adf475ea3c6f56318d6ba"},{url:"assets/ClosePopup.20bc2b8d.js",revision:"b480099f0b5baf1b316bf3d3a31eda74"},{url:"assets/ErrorNotFound.dbf90c40.js",revision:"033f115d919481e2854daa7ac27f1233"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"assets/format.d0971b8d.js",revision:"bcd5244e23d0e0fad610e5cfc29dba28"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.ed0e09ba.css",revision:"f4e79fcf1bdd86f5b4f2effccc09ede1"},{url:"assets/index.f8ff3c95.js",revision:"eaae99a278c1377ac778db199f094b3a"},{url:"assets/IndexPage.d4aa02e2.js",revision:"791f021f363915a53a5b9c222b13f86a"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/login.196a23db.jpg",revision:"069bb7c3d50eaa9524ca8dc3389ce9f1"},{url:"assets/LoginPage.8bb6a3bc.js",revision:"07d118cd862b28eee26be6c9454089d3"},{url:"assets/LoginPage.ef6e20dc.css",revision:"8712ea484355dc3c4ffdbecb177da0f4"},{url:"assets/MainLayout.41ced0d3.js",revision:"7d66161430c544100f26894d80928aab"},{url:"assets/position-engine.462165d6.js",revision:"6398c5ef15b5df74c4c5dafa093bf069"},{url:"assets/QItem.26eb41e1.js",revision:"e8d1f57d6cd7e4bf095d9c3f526e82da"},{url:"assets/QPage.b0391766.js",revision:"5a89aaee8c567325865c367ed3e0f621"},{url:"assets/QPageContainer.ae828ecc.js",revision:"c7630269e33fefad07fe53cd94f9ac5b"},{url:"assets/QSpace.017fde33.js",revision:"aabd7f46d323cad3b272af331ec9bd5d"},{url:"assets/QTooltip.3bdf63f4.js",revision:"0b9d15f96fc877a2c33d29a7956d0061"},{url:"assets/StudentsHistory.e28ffd63.js",revision:"6f05cfb0d4b7dea59dc055b64605b16a"},{url:"assets/StudentsHistory.f53f564e.css",revision:"6aa6b03c04084ecf22cebf83a5c3db6c"},{url:"assets/StudentsIndex.77ebf31d.js",revision:"0b265fa5c7e6ed51a49e6d9edb36fa9b"},{url:"assets/UsersIndex.1305b274.js",revision:"5f6c9f188ba5ddcb5fb435bc76eddd06"},{url:"favicon.ico",revision:"63611c8a591a42c01940c4abc36aa87d"},{url:"fondoLogin.jpg",revision:"dd2563bc86f5afb47e2441b7a6ee29f8"},{url:"icons/apple-icon-120x120.png",revision:"9b183e47131f6704c2f1c36ed0cfd427"},{url:"icons/apple-icon-152x152.png",revision:"d75b9696bc3bd28d270efd9dc4d2283b"},{url:"icons/apple-icon-167x167.png",revision:"0023f5b26b36ae2abcce55b79a13ef7a"},{url:"icons/apple-icon-180x180.png",revision:"177c0bdb2c9ce62f3f49dc312a479ca7"},{url:"icons/apple-launch-1080x2340.png",revision:"90cf718ecd60f54ccdf0c59e12df6931"},{url:"icons/apple-launch-1125x2436.png",revision:"a64b0e41f4ee16752f80eb2a1b4e6909"},{url:"icons/apple-launch-1170x2532.png",revision:"e716dd16b4b5fa00c0d6312e58b26dd7"},{url:"icons/apple-launch-1179x2556.png",revision:"8ba4ff2fda202fe17cc8827983c87197"},{url:"icons/apple-launch-1242x2208.png",revision:"4ba5f82c0beeac7684ae83994bca42ec"},{url:"icons/apple-launch-1242x2688.png",revision:"24c236262422abba36ca94783c39146a"},{url:"icons/apple-launch-1284x2778.png",revision:"989c110b3de513a58bb31a0d393d7350"},{url:"icons/apple-launch-1290x2796.png",revision:"0716d2050bad25455cef1fdfd9aceed7"},{url:"icons/apple-launch-1536x2048.png",revision:"0cb478e6cd6eba1871f4bb9994bbcb85"},{url:"icons/apple-launch-1620x2160.png",revision:"6dad8a31b8f4dcdb973619863e585554"},{url:"icons/apple-launch-1668x2224.png",revision:"d169ded14e1b866a3ba8336ca52bd224"},{url:"icons/apple-launch-1668x2388.png",revision:"18c63c3498e417566877bbc6397c2469"},{url:"icons/apple-launch-2048x2732.png",revision:"731e017d09370a8a9824960c6784315a"},{url:"icons/apple-launch-750x1334.png",revision:"ea5fb9efd722b1b2167c818a4ae79657"},{url:"icons/apple-launch-828x1792.png",revision:"f355a0596f2be162748598d51f472abc"},{url:"icons/favicon-128x128.png",revision:"f5e86683d12cab3525a0a517d7c0ac96"},{url:"icons/favicon-16x16.png",revision:"897ef8381b1d21210f366f520c5305a5"},{url:"icons/favicon-32x32.png",revision:"c8e338a85627c69354cdb3997d8c3726"},{url:"icons/favicon-96x96.png",revision:"6e7efb36b8ecfce027bde39165162f20"},{url:"icons/icon-128x128.png",revision:"f5e86683d12cab3525a0a517d7c0ac96"},{url:"icons/icon-192x192.png",revision:"28405c2ed80174e3aff611f85d8f6a1b"},{url:"icons/icon-256x256.png",revision:"15d137360b63084a3e13643c43c1f968"},{url:"icons/icon-384x384.png",revision:"a091837c1a1a3ad688a55cb33665bcb7"},{url:"icons/icon-512x512.png",revision:"5cee70f86ca0dc64663404b3f5cec332"},{url:"icons/ms-icon-144x144.png",revision:"c6451ad8858c5454dfa635e60dc186c2"},{url:"icons/safari-pinned-tab.svg",revision:"08ba8897eedd7cc5829beb12dd38cf6c"},{url:"index.html",revision:"bc3675d311bed254edcc4627f45b423c"},{url:"logo.png",revision:"329dc889681cb1de73eafe4e45a23212"},{url:"manifest.json",revision:"278a27d7eaf5119ad05aaad6cc763a4e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
