const url=require("url");
//This module applied to urls...so we need to create them using URL class

//Instantiating a new URL Object
const myUrl =new URL("http://mywebsite.com:8000/hello.html?id=100&url=active")

//Serialized URL
console.log(myUrl.href)
      //OR
console.log(myUrl.toString())

//host -> to get the host or root domain
console.log(myUrl.host)

// hostname -> doesnt include the port and returns the host name 
console.log(myUrl.hostname)

//pathname
console.log(myUrl.pathname);

//search -> returns the serialized query 
console.log(myUrl.search)

//searchParams -> returns the serialized query in object format
console.log(myUrl.searchParams)

//add  -> add parameters dynamically
myUrl.searchParams.append("name","Astitva")

console.log(myUrl.searchParams)

//loop through parameters
myUrl.searchParams.forEach((value,name)=>{
      console.log(`${name}:${value}`)
})