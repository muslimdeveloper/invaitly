'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "20d28d38cd263ffb6018517d7a8434cc",
"version.json": "390fc29bfbcc55e21d329a3085dd1466",
"index.html": "6fd27e3d610369dcd1067137015811e4",
"/": "6fd27e3d610369dcd1067137015811e4",
"main.dart.js": "d86768bd23b2408cd0cc7c6e4887451c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "c2a7036b6350d4063590ad697d196dde",
"icons/Icon-192.png": "dc7dbb3d850bfc20f010c7c43d9b4f5d",
"icons/Icon-maskable-192.png": "dc7dbb3d850bfc20f010c7c43d9b4f5d",
"icons/Icon-maskable-512.png": "c1624be68ce77dd0c6ea7417a2a824a0",
"icons/Icon-512.png": "c1624be68ce77dd0c6ea7417a2a824a0",
"manifest.json": "01ade15ef054dd2e379b129958309863",
"assets/AssetManifest.json": "b9786ad260bbdde015a56a5869960927",
"assets/NOTICES": "1679b192573e84adf58d8cda471d325b",
"assets/FontManifest.json": "ea1dfdea9f8eddc64baac136e2ebdabb",
"assets/AssetManifest.bin.json": "84c578bb64275284040f6efc2e290444",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8dfe03fe6b521d0298bced31b4a45892",
"assets/fonts/MaterialIcons-Regular.otf": "fff36ff33389bdc4a9a7391da248cefd",
"assets/assets/images/border_bottom_center.png": "231ce539b62d251a79036c80a11039e1",
"assets/assets/images/border_top_left_2%2520copy.png": "582e01b32c2b235271a0432fb5ea49f1",
"assets/assets/images/frame_flower.png": "70487d8b5b985738e1f6c1b755e111bb",
"assets/assets/images/border_bottom_right.png": "0b06ff3f4a0d4de568ef52aafe0d98d8",
"assets/assets/images/background_frame.png": "5dfa433c40f5af482f70551c3dbff61c",
"assets/assets/images/border_top_left_2.png": "582e01b32c2b235271a0432fb5ea49f1",
"assets/assets/images/border_center_left.png": "5e6293c8631c9ce18c744649ade5d30e",
"assets/assets/images/border_left.png": "15041b5935bb3b0be6249236a6eb8959",
"assets/assets/images/flower-frame.png": "8522e7606108197efbff89b2409fa26d",
"assets/assets/images/flower-frame-two.png": "1ab383c3f1bbdaa64d6c8b2353518c58",
"assets/assets/images/border_center_right.png": "75a8ad200d9f6873e26078a73df05dd1",
"assets/assets/images/basmalah.png": "8a8ec4abf8f052ac48a410a1a40e0b28",
"assets/assets/images/border_center_right_3.png": "2170281b30eb56b832326c98a7398f3b",
"assets/assets/images/border_top_left.png": "4f890137aaed97da7fbfe694ee5c8fe6",
"assets/assets/images/border_bottom_right_3.png": "6c5f43d4d914e3908f4e9f4f76affec8",
"assets/assets/images/border_bottom_right_2.png": "8b993e2c00961baa8a503d83fba6fad8",
"assets/assets/images/border_center_right_2.png": "3815c1a1e833d1855dac470ad621be45",
"assets/assets/images/flower_top_right.png": "002e23bda31657921d05d6105a9abc18",
"assets/assets/images/border_bottom_left_3.png": "4a9b111b12f2ffcdebc9388dc1c1ce2a",
"assets/assets/images/border_bottom_left_2.png": "1c433ad2a6e1f3176c2006a1f864f692",
"assets/assets/images/flower_bottom_left.png": "9ddf96e26d9158795408af2dd8bf57d0",
"assets/assets/images/border_bottom_left.png": "fb85fd2d74cc389bd606788bd10dd5be",
"assets/assets/images/border_top_right.png": "b3b3061233e042a6d35d05fa64129772",
"assets/assets/images/border_right_bottom.png": "c95794b9df1ef8a71c496caab50217be",
"assets/assets/images/border_center_left_4.png": "baa719482a7d8cc7e2afb2679bfc6b44",
"assets/assets/images/border_center_left_5.png": "9fa8e8f8b35df4ae981c841f662477a3",
"assets/assets/images/border_right.png": "51cad7a87e3bba525217922c14bb89d9",
"assets/assets/images/border_top_right_2.png": "027a5955320d5b66eb9d26ab5815f91a",
"assets/assets/images/border_center_left_2.png": "e482fa55b20a235e6f4d672fc291a5f4",
"assets/assets/images/border_center_left_3.png": "3e6782ca95006a1b170446c4218f7760",
"assets/assets/images/border_bottom_center_2.png": "b6023d3cf7401aea14167ae6d6d7c3c5",
"assets/assets/raws/nasyid-nikah.mp3": "f966683b6eaba69e202ad7d8faae706c",
"assets/assets/icon/icon.png": "0b42ea1b24e766b02d994237a868d3aa",
"assets/assets/icon/flower-bouquet.png": "3c4d892cf7edd6b1754c8ae75e843700",
"assets/assets/icon/crown.png": "d7c0ba50901b953011a0a49fd7a06811",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/DancingScript-Bold.ttf": "1803686a822e2b10ecd6909227cb8d25",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/RougeScript-Regular.ttf": "aa4780339232165242f0d4f4db823e7e",
"assets/assets/fonts/Italianno-Regular.ttf": "93cb3737a746d5f036fc1285806c785c",
"assets/assets/fonts/EuphoriaScript-Regular.ttf": "8485462135c72245e277865f32ef0c90",
"assets/assets/fonts/DancingScript-Medium.ttf": "bc2ca7b9fedcc4e467366a29a8637917",
"assets/assets/fonts/Smoothie-Shoppe.ttf": "ae876bd14b49e44b8c5b4dd74a496002",
"assets/assets/fonts/SloopScript-Regular.ttf": "e2242aa0a18e2afdbf3449a32870460b",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/DancingScript-Regular.ttf": "4166d03f2359652b8f239e23578b8232",
"assets/assets/fonts/DancingScript-SemiBold.ttf": "3d52bed05c9e88e6b9605ddcf6db06ac",
"assets/assets/fonts/Baskerville-Display-PT.otf": "085b6f0949076a9826e61dde61f200e4",
"assets/assets/fonts/The-Seasons-Regular.otf": "2bf14fe519127a55528c3b9f0be24403",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
