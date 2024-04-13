//Lifecycle of a service worker:
//Register->Install->Activate

//We need to register the service worker and then include it inside the index.html. So we register it inside the main.js

//Two ways of caching

//Method : 1
//Caching only selected pages
const cacheName = "v1"  //Give name such as v1 to keep the track of cache versioning
const cacheAssets = ['./index.html','./about.html','./index.css','./main.js']  //An array of assets that we want to cache 


//Method : 2
//Taking the entire response and then caching it(is there is a complex website then the first method doesnt work)
//caching the entire response is done inside the fetch

//Here we are going to install the service worker
//To do that , we need to add a eventListener to service worker

self.addEventListener('install', (e) => {
    console.log('Service Worker Installed')

    e.waitUntil(caches
        .open(cacheName)
        .then(cache => {
            console.log('Service Worker : Caching files')
            cache.addAll(cacheAssets)
        })
        .then(() => self.skipWaiting())); //Tell the browser to wait until the promise is finished
    
})

self.addEventListener('activate', (e) => {
    console.log('Service Worker Activated')
    //Remove Unwanted Caches
    e.waitUntil(
        caches
            .keys()
            .then((cacheNames)=>{
                return Promise.all(cacheNames.map(cache=>{
                    if (cache !== cacheName){
                        console.log("Service Worker : Deleting Old Cache")
                        return caches.delete(cache)
                    }
                }))    
            })
        )
})


//Call Fetch Event 
self.addEventListener('fetch',(e)=>{
    console.log('Service Worker : Fetching')
    e.respondWith(
        fetch(e.request)  //fetching e.request fails if there is no connection with the server
        .then()
        .catch(()=>caches.match(e.request)) //The required files are cached. Now whatever file matches the requested url is returned.
    )
})