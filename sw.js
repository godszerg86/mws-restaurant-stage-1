let cacheName = `map-v1`;
const filesToCache = [
    '/',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/404.html',
    '/offline.html',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
];








// self.addEventListener('install', function (event) {
//     event.waitUntil(
//         caches.open(cacheName)
//         .then(cache => cache.addAll(filesToCache))
//     );

// });


// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request,{ignoreSearch: true}).then(function (response) {
//             if (response) {
//                 return response;
//             }
//             return fetch(event.request).then(function (response) {
//                 if (response.status === 404) {
//                     return caches.match('/404.html');
//                 }
//                 return response;
//             });
//         }).catch(function (error) {
//             return caches.match('/offline.html');
//         })
//     );
// });

