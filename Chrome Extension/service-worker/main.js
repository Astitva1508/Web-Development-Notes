//Make sure that service worker are supported
if ('serviceWorker' in navigator){
    //Register the service worker when the window loads
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('./sw_cached_site.js')
        .then(reg=>console.log('Service Worker Registration Successful ',reg))
        .catch((err)=>console.log('Service Worker Registration Failed with error: ',err))
    })
}  //navigator is like the browser object