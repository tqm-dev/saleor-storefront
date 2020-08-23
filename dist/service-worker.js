importScripts("/storefront-assets/precache-manifest.819819ab272a95e5e0aa165e2b7eaf38.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-undef,no-restricted-globals */

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({
  prefix: "saleor-store-front",
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerRoute(
  new RegExp("^http.*(?:png|gif|jpg|jpeg|webp|svg|csv|pdf)"),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/storefront.html"),
  {
    blacklist: [
      new RegExp("/graphql"),
      new RegExp("/dashboard"),
      new RegExp("/media/export_files"),
    ],
  }
);

