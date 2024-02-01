'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "30f0ac66f217cd099ac3d80a54138e05",
"assets/AssetManifest.bin.json": "164af668906e203ca92d1a073e9e2d5f",
"assets/AssetManifest.json": "9f6fe669b76317de5c7b9ce0e3977455",
"assets/assets/acaciawater.jpg": "c2274b5291e3e0973a41de30357be1dd",
"assets/assets/africa.json": "12417da15bcdb19e7b6d317397be398c",
"assets/assets/agago/Achwa%2520catchment.json": "d4b38577359cbdfe606aaf362b77ba69",
"assets/assets/agago/Agago%2520catchment.json": "0b978451dd17271abf7a97af41701917",
"assets/assets/agago/Agago_river.json": "adb7fa4b33a07653545bf856ad610a4f",
"assets/assets/agago/aswa_catch_districts.json": "6ca90d9e8cf38a6e51101ab962bfa39e",
"assets/assets/agago/roads_agago_sc.json": "1e64f68dba271f61137c6f3619b09d15",
"assets/assets/agago/towns_agago_sc_clip.json": "78a69ed85108e110793ecf56bb218f96",
"assets/assets/aidlogo.png": "da32982a166c2d211b169ed517214b34",
"assets/assets/aidlogoblack.png": "08077862eb8b390de190f4c004e47eac",
"assets/assets/Aubergine.png": "3d3fc319d8b7f4ae899cd5a6d1e58500",
"assets/assets/australia.json": "44a78deabd95d71e77e92b831084ea91",
"assets/assets/avator.png": "cac510d743f67181b9ce8424ff32788b",
"assets/assets/chart_data.json": "04e7199ad841fba81e37771a4a435c2c",
"assets/assets/city.json": "deb079c920c4556f8738b1ff1e3114be",
"assets/assets/custom_map_style.json": "fae3eb0fe67933f9c3cc8dacda1deb96",
"assets/assets/dark.png": "1cd7274e8f99cc1984facaf50b5640f2",
"assets/assets/earth.glb": "6dbe6acfd8dc629605af78fd1f77b92c",
"assets/assets/europe.json": "d4355549caa721ff759e195d7d577917",
"assets/assets/germany.json": "87954bae3e3a713cf7b3d01652caa64f",
"assets/assets/google_map_north_pole.png": "eaf3b4c37cb1ca979b802b4f32c378c8",
"assets/assets/google_map_south_pole.png": "bc1f3fc8afc5455ece9b0f426ac528ea",
"assets/assets/gwp.jpg": "638363aa585e25e56a899c27530aef48",
"assets/assets/igrac.jpg": "c83505a2f90799cdaaed099839ebca70",
"assets/assets/ihe.png": "7afc39e1b584b2502ca8df958a82961f",
"assets/assets/india.json": "3b2ced7cbf6e78d43fcb5782a37e75c1",
"assets/assets/land.png": "362f29b2b0812f304ccfe625237d7521",
"assets/assets/logo.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"assets/assets/london_to_british.json": "acf88d90433d44a6aaa54ec574ee9b1f",
"assets/assets/london_to_chessington.json": "9b13f2b03f369d21084ca034a789b605",
"assets/assets/london_to_hampton_court_palace.json": "7bacef17a41bddedc0c7f3e5a33453f9",
"assets/assets/london_to_twickenham_stadium.json": "d6c4960ae2b30dd936d460c14a759e84",
"assets/assets/london_to_windsor_castle.json": "852eb2d8e3a192c1f137df6564b06dbe",
"assets/assets/map.svg": "02fa0fd0f4444aa68f087fb0df343352",
"assets/assets/maps_brazil_boundary.json": "60d58b946c3e19f94570bee88aedfb22",
"assets/assets/maps_france_boundary.json": "23b5fb1f421fe1bd04eb513ff6c94a23",
"assets/assets/maps_uk_boundary.json": "94431ddef9bb3e08b20fdf4ba422fe6f",
"assets/assets/metameta.png": "f398740f42b29ca5f4a874c59ace16b7",
"assets/assets/night.png": "09667b89aca0d455d88a1f183afbd8f0",
"assets/assets/normal.png": "2e94e5ff0d7af4b53d1d3e2c89714709",
"assets/assets/product_data.json": "6b752f38d76bcb4a85530e0247ea1746",
"assets/assets/Protected_areas.json": "c8775ce416091194566b1756b652208c",
"assets/assets/rain.png": "57e8fbf379ded6ad591bf629047b5d38",
"assets/assets/Retro.png": "8923a123e61a4588e7e8da64f344da23",
"assets/assets/river.json": "885bd34e8960baf403d282d0b903de17",
"assets/assets/silver.png": "46e0c22d9caf0cb1822c875090b2c8b2",
"assets/assets/Sliver.png": "46e0c22d9caf0cb1822c875090b2c8b2",
"assets/assets/south_america.json": "73bdf48ce9f7487b0e1dda5968cc7190",
"assets/assets/stockholm.png": "cc395f8d16e7ba17d41e24bf27a4a4d5",
"assets/assets/svg/action.svg": "05881d9eaa0fb4ce2308fb74aa96bf4b",
"assets/assets/svg/all_ticket.svg": "ad5c01e6a791d3b41c60ad497fd5b224",
"assets/assets/svg/arrow.svg": "302c914497780c63b6ed62712f00a808",
"assets/assets/svg/check.svg": "1e94c72ae1e009f073d7cd49e619e948",
"assets/assets/svg/delete.svg": "2c52e5e1d8ab1b18b825b9220790517f",
"assets/assets/svg/email.svg": "caf6e71fd05cfdd3d6b6e70c2fbbe4d2",
"assets/assets/svg/empty.svg": "c89f210ee170b363d58625d6155535f0",
"assets/assets/svg/exit.svg": "472cede9b69ca7969a825544b5328741",
"assets/assets/svg/file.svg": "2e21beb82f4a229747fee9067235124e",
"assets/assets/svg/home.svg": "1f4fc301183383494733a4093b8a3390",
"assets/assets/svg/inspection.svg": "0bdbb243336d07dacba34e197d1dcc22",
"assets/assets/svg/issue.svg": "55b024ccfc7f963e445e90d6ad497e7e",
"assets/assets/svg/lock.svg": "198a2bc194cdd6218f347fc81396c236",
"assets/assets/svg/logo.svg": "4b505a0ecaa71e3fa7879b1f473187fa",
"assets/assets/svg/menu.svg": "9bbf86bb1494a73d4e5bbda04204890c",
"assets/assets/svg/more.svg": "366c06e261180b662120b0a1ea621695",
"assets/assets/svg/my_ticket.svg": "4c235918eeb43ab21e3b7634e584a19f",
"assets/assets/svg/password.svg": "d6d981e9aeb10f8a5f5ec0c515b05235",
"assets/assets/svg/password_item.svg": "11f21b6869cf7c51730720762637a4f3",
"assets/assets/svg/person.svg": "8cab88a93b95966e0a686ff379b7d34c",
"assets/assets/svg/phone.svg": "9179e1365199c18052aaaaa0fd82d78c",
"assets/assets/svg/scan.svg": "a6681473d8fe1d6d86bf1c34b6a99d59",
"assets/assets/svg/search.svg": "0eb46e729fae1a447cc5c2392199d2f9",
"assets/assets/svg/send.svg": "355a02ed48118febbed60e325f0197d5",
"assets/assets/ubuntuhero.jpg": "da800c07714e0d5fa753be575cbb66ff",
"assets/assets/Ug_Waterbodies.json": "fc6425e91285896edeb62730bce22904",
"assets/assets/usa.json": "a50aca5dd3dafa2fca014f6461a14dab",
"assets/assets/verdant-earth-technologies.png": "87d3b07ae35da7a6e98b8ff8cfe706d0",
"assets/assets/wocat.jpg": "7c1892dd49ca5796392077a70e5ba9bb",
"assets/assets/world.json": "204abef9c183d175a270f181855beda2",
"assets/assets/worldbank.png": "5c6e82ef5e87d945a41d931d35bf935e",
"assets/assets/world_map.json": "80bdf06bacdd991fc5ba67cff2cf0216",
"assets/FontManifest.json": "540bc686e066e986b314c71223fbcc49",
"assets/fonts/MaterialIcons-Regular.otf": "fac1700f9c4316e865223dbe9841c5f0",
"assets/NOTICES": "21fd78b2c3a7c08537594f3ab7da101b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/handy_window/assets/handy-window-dark.css": "212d71b05065406d3c6c72c059a4ed9d",
"assets/packages/handy_window/assets/handy-window.css": "135b89011bc9f52823260e9da2b0c31d",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/wiredash/assets/images/logo_white.png": "d51118529c8b6f919c485cd81e9a840e",
"assets/packages/wiredash/lib/assets/fonts/Inter-Bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/packages/wiredash/lib/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/packages/wiredash/lib/assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/packages/wiredash/lib/assets/fonts/Wirecons.ttf": "39dff657dd43bfb7ab7e25406d4baab7",
"assets/packages/yaru/src/text/fonts/Ubuntu-B.ttf": "c33c9da914508707cc7d4453239176a5",
"assets/packages/yaru/src/text/fonts/Ubuntu-BI.ttf": "9eac57f171903e63575285b864a03ac8",
"assets/packages/yaru/src/text/fonts/Ubuntu-L.ttf": "8752cc329a4ba278de1fbe87848f64f0",
"assets/packages/yaru/src/text/fonts/Ubuntu-LI.ttf": "dff2c7f7e103ee2516e9c993b62453f3",
"assets/packages/yaru/src/text/fonts/Ubuntu-M.ttf": "d22dd270cff85396469ca949121abc10",
"assets/packages/yaru/src/text/fonts/Ubuntu-MI.ttf": "e8d536491885e9c071e3ee4803d951d2",
"assets/packages/yaru/src/text/fonts/Ubuntu-R.ttf": "29b1464e2d39f94775515968be952cb4",
"assets/packages/yaru/src/text/fonts/Ubuntu-RI.ttf": "6f1f6aa0bc3920f8eccbe06fdc883ada",
"assets/packages/yaru_icons/assets/yaru_icons.otf": "4b7097c0495fb6d537a93d6225a1dd1f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"icons/Icon-512.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"icons/Icon-maskable-192.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"icons/Icon-maskable-512.png": "b98bdd6e75afc8721b8c16dd36df91b7",
"index.html": "833afac1240e698c82179ab406386182",
"/": "833afac1240e698c82179ab406386182",
"main.dart.js": "c89bc0738b04978d7d0040cb085f1813",
"manifest.json": "7e36566359edc4a1f6237f51494d2cd0",
"version.json": "ea4397f2cf58f05e8a5bc39f8166acbb"};
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
