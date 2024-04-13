//Example to illustrate CallBacks

//Anonymous Function can only be defined and cannot be fired

//First Way of CallBacks
// function kucchBhinahi(number,callback){
//     x = callback(number);
//     return x ; 
// }


// function kucchBhi(req){
//     console.log(req);
//     return req*req;
// }

// console.log(kucchBhinahi(5,kucchBhi))

//Second Way of Callbacks

const posts=[
    {
        name:"Astitva",
        age:19
    }
    {
        name:"Rehan",
        age:18
    }
    {
        name:"Rituraj Paul",
        age:6
    }
]

function showPosts(post){
    var output = ""
    posts.array.forEach(element => {
        output+=`<li>This is first name ${element.name}</li>\n`
    });
}

function getUserData(post,callback){

}
