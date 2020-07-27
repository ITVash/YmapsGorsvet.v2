importScripts("workbox-v5.1.3/workbox-sw.js")
workbox.setConfig({ modulePathPrefix: "workbox-v5.1.3/" })

const dataCacheConfig = {
	cacheName: "meme-data",
}

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)

workbox.routing.registerRoute(
	({ request }) => request.destination === "image",
	new workbox.strategies.CacheFirst({ cacheName: "meme-images" }),
	"GET",
)
workbox.routing.registerRoute(
	new RegExp("https://us-central1-gorsvetserver.cloudfunctions.net/api/coup"),
	new workbox.strategies.CacheFirst({ cacheName: "coup-api" }),
)
workbox.routing.registerRoute(
	new RegExp("https://us-central1-gorsvetserver.cloudfunctions.net/api/opora"),
	new workbox.strategies.CacheFirst({ cacheName: "opora-api" }),
)
