/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/512.png",
    "revision": "f049077e4cee724dbdee52e54e781a16"
  },
  {
    "url": "assets/icon/android-icon-144x144.png",
    "revision": "8bc41130f545cbc26f8997512b8b479f"
  },
  {
    "url": "assets/icon/android-icon-192x192.png",
    "revision": "89716ece240570eec8972a0ed408ab65"
  },
  {
    "url": "assets/icon/android-icon-36x36.png",
    "revision": "107dd4cbd5a564d7dddf9115b7df111a"
  },
  {
    "url": "assets/icon/android-icon-48x48.png",
    "revision": "e8045629cd15e2c10213945f2450ca53"
  },
  {
    "url": "assets/icon/android-icon-72x72.png",
    "revision": "f7e22a6b01638f40feec7906c610e71b"
  },
  {
    "url": "assets/icon/android-icon-96x96.png",
    "revision": "4fb564a78860666c5948b3b701946ccc"
  },
  {
    "url": "assets/icon/apple-icon-114x114.png",
    "revision": "eb74c7ce46d1a04f3a85e07cab4ef621"
  },
  {
    "url": "assets/icon/apple-icon-120x120.png",
    "revision": "4c8f7732ae19a80401677a01ab3b11e5"
  },
  {
    "url": "assets/icon/apple-icon-144x144.png",
    "revision": "8bc41130f545cbc26f8997512b8b479f"
  },
  {
    "url": "assets/icon/apple-icon-152x152.png",
    "revision": "1a1ea6a2a3b4b02dfc907895a530b947"
  },
  {
    "url": "assets/icon/apple-icon-180x180.png",
    "revision": "8b5014c919f41787f7959760826fc94d"
  },
  {
    "url": "assets/icon/apple-icon-57x57.png",
    "revision": "8ff5283bbaab35d92a12754aa5c750e5"
  },
  {
    "url": "assets/icon/apple-icon-60x60.png",
    "revision": "084b00a92f094412091064c2ac90d6a1"
  },
  {
    "url": "assets/icon/apple-icon-72x72.png",
    "revision": "f7e22a6b01638f40feec7906c610e71b"
  },
  {
    "url": "assets/icon/apple-icon-76x76.png",
    "revision": "a1707ebecb44df5d6d08302e98955ad4"
  },
  {
    "url": "assets/icon/apple-icon-precomposed.png",
    "revision": "6cb91d4090a1f6c48d73a58245757dec"
  },
  {
    "url": "assets/icon/apple-icon.png",
    "revision": "6cb91d4090a1f6c48d73a58245757dec"
  },
  {
    "url": "assets/icon/favicon-16x16.png",
    "revision": "4c35124f6b06bcc10e861d1f6abf5dfc"
  },
  {
    "url": "assets/icon/favicon-32x32.png",
    "revision": "e60b00d15ae4fee691bdbee84bc6bf08"
  },
  {
    "url": "assets/icon/favicon-96x96.png",
    "revision": "4fb564a78860666c5948b3b701946ccc"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "0051f043a10fd6cc2e365e9fab96ddaf"
  },
  {
    "url": "assets/icon/ms-icon-144x144.png",
    "revision": "8bc41130f545cbc26f8997512b8b479f"
  },
  {
    "url": "assets/icon/ms-icon-150x150.png",
    "revision": "9c70dc24daaf4a863eee16025d8910d6"
  },
  {
    "url": "assets/icon/ms-icon-310x310.png",
    "revision": "e6fd8790958097838fcf81ffc0aba548"
  },
  {
    "url": "assets/icon/ms-icon-70x70.png",
    "revision": "ae347f83ba51d618e006f34195fb11e8"
  },
  {
    "url": "cover.css",
    "revision": "283ecbcc8d1463810cf5713588f84b2f"
  },
  {
    "url": "index.html",
    "revision": "774b1f430be46d288c4fbffaa1192f4e"
  },
  {
    "url": "manifest.json",
    "revision": "592345439f08c7b49c5f35354505e323"
  },
  {
    "url": "snackbar.min.css",
    "revision": "e71ec9c9f41a5ea7f1ecb9135e875ca7"
  },
  {
    "url": "snackbar.min.js",
    "revision": "e2dc758b15e919a81d085418566fad11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
