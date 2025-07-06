'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cf6d9aad3ec9e9cdfa8d3830b7911029",
"flutter.js": "1e28bc80be052b70b1e92d55bea86b2a",
"icons/Icon-maskable-512.png": "f034c476e9c70c91dbfa4904f1ecb65f",
"icons/Icon-512.png": "f034c476e9c70c91dbfa4904f1ecb65f",
"icons/Icon-maskable-192.png": "33e759627ba1b546bb921356170f87b5",
"icons/Icon-192.png": "33e759627ba1b546bb921356170f87b5",
"assets/NOTICES": "3ad1b7228168cc43a9ba351c22b692dc",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f1b3bc9335cffb10db67e6f55529cb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "af1bc951c54eb3e60f2f154131159224",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3299836458943bb1f77fb9d4b5e26454",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1b39894a8f402e8654bb47abed99d857",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/AssetManifest.json": "044be5fc95acc3007ef9979b8e7798bf",
"assets/assets/images/image_loading_bg.png": "19e8ed6503b8854b07ea6329f5c66b58",
"assets/assets/images/icon.png": "f034c476e9c70c91dbfa4904f1ecb65f",
"assets/assets/fonts/TitilliumWeb-Bold.ttf": "d49a8ee8f1baee082909ab2e7c4062d1",
"assets/assets/fonts/Formula1-Black.ttf": "f817b827ea06fe3bfe3ee1e8d538686a",
"assets/assets/fonts/TitilliumWeb-Regular.ttf": "c21564022e51245ca150237eeb23a2bb",
"assets/assets/fonts/Formula1-Wide.ttf": "5d49e39d722714a96525c359f0cc9ae5",
"assets/assets/fonts/Northwell-Alt.ttf": "8d3f818b968b9c57e1eabe7addbf3ad3",
"assets/assets/fonts/Formula1-Bold.ttf": "0819be9f7b49bc08416fb2f43b00fa0f",
"assets/assets/fonts/Formula1-Regular.ttf": "ea4e4ee446011c99fc8d534fc4eb8d0d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "6ab036009fd4152450c1cafb3537a678",
"assets/AssetManifest.bin": "8d585a890e28e933e0d2c918749a799d",
"assets/fonts/MaterialIcons-Regular.otf": "a63bfc5bd110b04f45f33b75636329ee",
"assets/FontManifest.json": "7beade838e65a1c7a0816988240f0d87",
"flutter_bootstrap.js": "82aef61bb0afa14c0bf1f9712a0624cc",
"manifest.json": "2e1d008ad2005b9622232e9c2f57883f",
"main.dart.js": "edcd460006a4b5c0cf562cace200c2a6",
"index.html": "d5c88c70871267d83bf09dd32eac688f",
"/": "d5c88c70871267d83bf09dd32eac688f",
"favicon.png": "31354e2ea9d10011172c65088525f929",
"canvaskit/skwasm_st.js.symbols": "e8c3533b95bb1ce3f73f384ad7316891",
"canvaskit/chromium/canvaskit.js": "9dc7a140b1f0755e6321e9c61b9bd4d9",
"canvaskit/chromium/canvaskit.wasm": "67634589ed463666cb45f0d92566987d",
"canvaskit/chromium/canvaskit.js.symbols": "174331dc3cfd8cc59d48eccd7d26e03c",
"canvaskit/canvaskit.js": "8cf6e87eff144e2453a9640bfa1a4ad0",
"canvaskit/canvaskit.wasm": "d1c4dd59cc603c74bb2369dc221fee30",
"canvaskit/skwasm.js.symbols": "0ca2354c92f5c57e89b01ba4269d0a02",
"canvaskit/skwasm.wasm": "2633ddbb5c67dd6138f349f19082fa84",
"canvaskit/skwasm.js": "9c817487f9f24229450747c66b9374a6",
"canvaskit/canvaskit.js.symbols": "53ebfd139e29e2ea038796ad5de96691",
"canvaskit/skwasm_st.wasm": "b90d2b49f6f8882fbd7897a0a4da67e8",
"canvaskit/skwasm_st.js": "7df9d8484fef4ca8fff6eb4f419a89f8",
"splash/img/dark-2x.png": "bd2c513fa2b729344fa53dfc6c85f834",
"splash/img/light-4x.png": "c8874a60d70186693e766ce82208465e",
"splash/img/dark-1x.png": "6c4ba02cb7b40486f85bc113957febb1",
"splash/img/dark-4x.png": "c8874a60d70186693e766ce82208465e",
"splash/img/light-3x.png": "77acdd97f28b1a945a8b6d60efb8c560",
"splash/img/light-2x.png": "bd2c513fa2b729344fa53dfc6c85f834",
"splash/img/dark-3x.png": "77acdd97f28b1a945a8b6d60efb8c560",
"splash/img/light-1x.png": "6c4ba02cb7b40486f85bc113957febb1"};
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
