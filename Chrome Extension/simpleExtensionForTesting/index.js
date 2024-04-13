import * as fs from 'fs'
document.querySelector('.btn1').addEventListener('click',e=>{
    chrome.permissions.request({
        permissions: ['activeTab'],
        origins: ['https://www.google.com/']
    }, (granted) => {
        // The callback argument will be true if the user granted the permissions.
        if (granted) {
            console.log(granted);
            fs.writeFileSync('./file.txt','Congo , the permissions are granted')
        } else {
            console.log("Its sad but the permission ain't granted")
        }
    });
})

