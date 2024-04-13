const cacheName = "v2"  //Give name such as v1 to keep the track of cache versioning

self.addEventListener('install', (e) => {
    console.log('Service Worker Installed')
})

self.addEventListener('activate', (e) => {
    console.log('Service Worker Activated')
    //Once we activate the service worker is when we clear the old cache
    //Remove Unwanted Caches
    e.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return Promise.all(cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log("Service Worker : Deleting Old Cache")
                        return caches.delete(cache)
                    }
                }))
            })
    )
})


//Call Fetch Event 
self.addEventListener('fetch', (e) => {
    console.log('Service Worker : Fetching')
    e.respondWith(
        fetch(e.request)
            .then(res=>{
            //Creating copy of the response we get from the server
                const resClone = res.clone()
                caches
                    .open(cacheName)
                    .then(cache=>{
                        //Adding the response to the cache
                        cache.put(e.request,resClone)
                    })
                return res
                })
            .catch (err => caches.match(e.request).then(res => res))
    )
})