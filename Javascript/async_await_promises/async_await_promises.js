let posts=[
    {title:"Post One" , description:"This is post one"},
    {title:"Post Two" , description:"This is post two"},
    {title:"Post Three" , description:"This is post three"},
];

function showPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach(element => {
            output+=`<li>${element.title}</li>`;
        });
        document.body.innerHTML=output;
        console.log("Mera Desired Data show ho Gaya")
    }, 1000);
}

function createposts(post,callback){
    setTimeout(()=>{
        posts.push(post);
        console.log("Mera desired data fetch ho gaya")
        callback();
    },8000)
    // callback(); Using the callback here is disastrous as you dont know whether server has returned the data or not
}
let post = {title:"Post Four" , description:"This is post four"}
// createposts({title:"Post Four" , description:"This is post four"},showPosts);
//Here , if we have defined the function createPost and getPost independently , then via use of setTimeout , since we have imitated the functioning of the server , then it took longer time to fetch data from the server using createPost but  due to asynchronous nature of setTimeOut , the showPosts gets executed first.
//Using callBacks and using showposts as one of callbacks to the createPosts , we can make sure that the callback is run only after we fetch data from the server

//Alternative Way is to do the same thing using promises
function CreatePost_promises(post){
//To sort things using promise , return the Promise Object which takes in a callback with two parameters namely resolve and reject
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            console.log("Mera desired data fetch ho gaya");
            let error=false;
            if (!error){
                resolve();
            }else{
                reject("The above code failed miserably")
                console.log("Oh Yeah")
            }
        },3000);
        // resolve();
    })
}

CreatePost_promises(post)
    .then(showPosts)
    .catch((err)=>{
        console.log("We failed to fail...lol")
        console.log(err);
    })

//returned Promise object ka method hai .then ,jo uske successfully resolve hone par yaani ki resolve ka code run hone par .then ke andar diya callback run kar dega.
//returned Promise object ka method hai .catch ,jo uske reject hone par yaani ki rejct code run hone par .catch ke andar diya callback run kar dega
//As far as what i can make of it , only one of resolve and reject runs once a function returning a promise is called..and all the other instances of resolve and reject are ignored
