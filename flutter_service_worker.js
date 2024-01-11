'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "782415af5db48a5d5ed85c1119463014",
".git/config": "ee8f7b001758f1bc61590ef344ad4030",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1fd67b24838b01c9b530ac37a19dd202",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4c0b1d41433ae534b70b130896bc2e1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f485e584ea703181cec42f41d1745125",
".git/logs/refs/heads/main": "3989f18390636e45dee23a58b8ed8196",
".git/logs/refs/remotes/origin/main": "e3aba2555546186e775ce85d9063372f",
".git/objects/03/8d363180fb358c1b4e4acbe8eb9fba3f957268": "036178329e79b42e57d44bd091bd1501",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/f71a722f20f87100b06c50a55f5f898424262b": "4a6299b274944de036ca1dc69bd6d280",
".git/objects/07/5ed35c1ac836e6817e87ab0ca946cd5a52ab66": "0ff475a1a5448e27484eeec1663c67f1",
".git/objects/0a/9e05e35274072693ec6825cc9a268c37235b47": "f40f5c60a56a748bf5d26846fdddae30",
".git/objects/0a/be67bb5deb7ac96bf6f19a9a7f0a90edcb9ddf": "6f2a212df4711f71d5645081126fb8a6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/18/4a59d200f06aaf7cc75afa8d7d6acf8c15e9c4": "8661871bc19d3ba9d4a5fb7039e3a62a",
".git/objects/19/ce486c8e9aa07039c77b578d6dc856fe516f6e": "91b644eb7dcbf5953e053fe92654736f",
".git/objects/1a/a9039fedae236994d051dc1b7aa20512ef3cb4": "52fa75da790fd96c1c3863aca9357f40",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/e243ceed702fcb1527422a4aacb64fe19ab0f6": "16d104b444984f71c65b4280cfe13c9b",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/d2c412485d20dfe09d512bc10b84c08758a72e": "78756d4e27108158e6d9d36dade8fe11",
".git/objects/22/d7fa92a1956acc5b80b4c1620c35cfb814fd88": "bfae803887d715e8bc5944410a8881fe",
".git/objects/25/119b48bddc6a39db0e3ef008e257c60d2cf3ea": "28c969b19b525c62bde6e45e3008fe82",
".git/objects/26/4396af73849c87c0624d9d91455de01453fdf8": "994d3c867b115cbf47c6a50413b83b82",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/29/158fd948eb0fd72dd92c7544ea693f4243a789": "8ac9600b621d2bb1b0f64274311319c8",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/800524a66b30234506ca5292d7a5b384b51027": "16b859bc72d989cf8f4cf9a079a8fbec",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/b331b4ada656576edea6994f1aa95f5925e681": "674930f1d00f27799d073cf3ff6a9ea2",
".git/objects/3b/91437bc8d988b24318df625852b7634303beb4": "0fae3c56b70eafbb7134612916ba7b56",
".git/objects/40/7df4c47ef860fd02645054c4923fbcba9195f0": "7fc1b29f4cb9525b8d35deacbb34526f",
".git/objects/41/a7e274847e21e32ab265f69a5909e25d08713e": "44eaa37c5a6e301b34383b6234c03fbe",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/76212078f0ec61d44531372d3a424a364703d5": "a356a47e3ba3ba1c743f06728d862d6f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/b098479fdee538ae4fc3decbbaf213432b9157": "73342e84c416f5af2e701cea2d0a178c",
".git/objects/48/e9a883c8ec4a1d1f0250c614d614094dfd9c6a": "33df70db5ba32efe90b020d8f6eac4e1",
".git/objects/4d/64bbbd11e2b7cb1a32a491c319b7ed6e60b25c": "3b6e52312f960f9fc68b2e0684aa871e",
".git/objects/4f/0fe24e8b05cb2fd39b247152818e99b243aa7c": "afd64d49f62d703db323a232b515e1d3",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/6e67f189af7560a611811e1ed5d8ae07b2374d": "7317dbb28de03b175ad7f9fcd0548d3b",
".git/objects/57/4cca78578a26b9c0bbbe9ffbb9d1fd420106ff": "5b16f868356a27bfc50036c46183b6f5",
".git/objects/5b/a1dd182b23947cf787de59b10b42e841733e71": "e96fb4a915a4187fc000de9c96411ec1",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/1ccc8cd4b2fb0a1b4902fd9f8908ac586730d6": "eb9721e5680b58e976241fec36bb3242",
".git/objects/64/2ac7bc70ecd979c72968ef4ff3a9386ab4eac6": "9aa0c5328e57f680e45b51a06f08db60",
".git/objects/6c/51736f18cf2537c3a85560d1eafa4bbf229ca1": "196df47fbcc9e8e0c2262abc3f129676",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/78/406589364d7340d00afad4f54cf614611babce": "61dfffba9993dec51854dab252eb7db7",
".git/objects/7f/bb072524856641e9e5b656a31c38ab2444a0e7": "4b4cbc1af711ddc312ce897650d33a24",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8c/08c4fd8dfbbb17aae5337ff33f2eb3831febbf": "b1ba7aa56b1e813257f2c6157c25d417",
".git/objects/8d/d4661e8b67891e51f4e47c9f8088c030b223b9": "247e41c38d022789a86e2c2bd41f2242",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/76f6c2b0d64e68a3239e2e6d1905e995f18372": "004519c0e511c721779f801e23ac8445",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/3e7a59af56ce3fe11f275efd1d1ceb59b05557": "70fb7d8a7f5f59b724cd52ad50f5095d",
".git/objects/b1/80c00b9117b1470b93584959c5f27f93733aae": "b427ca5983deaafd2d76733270a5687c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/e217a5023ccae1ae8528e4328caaa311b1bae2": "ff806026db7191ce94e0fb461bd96f91",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3a0e4e20fd85a641c75de9c88a89a54a2f8064": "6b364ec1767aedb5cb31ebe2a507e59d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/98bc1022ef0a799bf5b779766fa7dd97d88aef": "b9e8a90c5a651b4e596e2825bb515b13",
".git/objects/c0/e244a2879dbe72eedcdc51fbb916dd551bf9d7": "46d6e4f82bec8271bcbb814fef104b25",
".git/objects/c3/81a8bd0efa28ad80f49872f2c33f284a980820": "765fcbe9c73919f61b8a765f10b6063f",
".git/objects/c5/11cbfbf841817429640b6e4e49852c0de99144": "aa886dc3fb27633d8f10adbbccbd8348",
".git/objects/c8/95b367dc3a1e184665f61dfeded7ae10ccf3d5": "f562042fae2de77cf320edeca0fb0fb1",
".git/objects/ca/0c189b1319e909d86abd8ed243cb0803538882": "d4d12130a9a8b34d73738bb388418f3e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/3ebfb60870651660a0f2761ddfc7730f4f1d44": "afa81c8b214eebb174609993c4375611",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/fa0ce8f674c6796a58ca6a979f1a9ee1c74e35": "891fc3226f1a12970471cd26e3d5ee98",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/d6f0fd5ec33ad39c3094b8efa5c5facbbdbd0d": "cb81f65fd90e95634ca04fe9e4a6ef1b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/5022a2ae4091f8e75f7ee678f1e4b9e0c381ef": "3bc727271b5c02a16bbe7731d6b4370d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/b661fa227d9f6ace0f255ca7e3c274273a64ae": "2b0bdf329a77b87716d2d69a803eb2ff",
".git/objects/f2/7a2e0d49a3ebd5d8a3ec48555f070208c5fd6c": "f23bb093d72002673b6ff265e315d780",
".git/objects/f4/d89c2282436e0c65e3ce4b09438832e1c66178": "fe7d89800560097fbdc7d7bc72941340",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/b8f0efcdc70c83b3c95d66a013c7e09551cae4": "ce9d0da876d95fd4dae9f05e3d2d94b4",
".git/objects/ff/110358dd873624db1849f070fa2479f889e755": "99d8ae85da8476a32da5dad800f409a4",
".git/refs/heads/main": "c3b078ce1c60526c436c1a292b959590",
".git/refs/remotes/origin/main": "5ac1e366eeea812a2d67fcf6e64d3475",
"assets/AssetManifest.bin": "4abf730bfe86ef7d81b3badf4aa3b9ed",
"assets/AssetManifest.bin.json": "0535c253a1f126d4b7fad29b06eb2659",
"assets/AssetManifest.json": "297ba908ed713cb9042bb3d64c378fa8",
"assets/assets/right_answerSound.mp3": "ff9488c117413a6170605ca0ce428085",
"assets/assets/right_answerSound.wav": "f607b15b765e62566fc5da99e8c7be3d",
"assets/assets/test_Logo.png": "e9acffa90046be933f26ca659e6f5aa5",
"assets/assets/wrong_answerSound.mp3": "a44f256649206d2ccff95c0be8644bd5",
"assets/assets/wrong_answerSound.wav": "61942f21e263fdd0b494f7800675b2e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "b195cab21a3eb6d0e5aeb29438b1bfe6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ead1251ebd9b1ab9c0d8c8beca94311e",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "031d61bee266fe704c47842adf78b30f",
"/": "031d61bee266fe704c47842adf78b30f",
"main.dart.js": "b57c78fe1b73c16c95cf40949a00adde",
"manifest.json": "9b7b654872040b1490a94045ce5af8f1",
"version.json": "7428744056dc6355f0606c6deeefe222"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
