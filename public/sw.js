var cacheName = 'hello-pwa';
var filesToCache = [
	'/',
	'/index.html',
	'/css/style.css',
	'/js/main.js'
];

/* Inicia o Service Worker e cacheia todos os arquivos do app */

self.addEventListener('install', function(e) {
	e.waitUntill(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(filesToCache);
		})
	);
});

/* Server cacheia conteudo quando está offline */
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
	);
});