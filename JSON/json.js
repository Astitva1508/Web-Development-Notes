// Standard Data Types that can be used with JSON:
// 1.Number
// 2.String
// 3.Boolean
// 4.Null
// 5.Object (which consists of key-value pairs)
// 6.Array

let sampleObject={
    name:"Astitva",
    class:12,
    peakOfPowers:"Present",
    Hobbies:{
        Coding:["WebDevelopment","Competitive Programming","AI/ML/DL"],
        Sports:["Football","Basketball","Tennis","Badminton"]
    },
    method:function(){
        return this.name + " is at the peak of his powers"
    }
}

//Even though it seems like a JSON , its actually a JS Object
let apparentJSONSampleObject={
    "name":"Astitva",
    "class":12,
    "peakOfPowers":"Present",
    "Hobbies":{
        "Coding":["WebDevelopment","Competitive Programming","AI/ML/DL"],
        "Sports":["Football","Basketball","Tennis","Badminton"]
    }
}

let JSONSampleObject1=JSON.stringify(apparentJSONSampleObject);
//This method converts JS Object into a JSON.Now printing sampleObject.name returns undefined

let JSONSampleObject2=JSON.stringify(sampleObject);
//On consoling it , it converts all the code of the object that can be converted into a JSON and ignores the methods

//To convert JSON back to a JS Object
let JSONToObject1=JSON.parse(JSONSampleObject1)
let JSONToObject2=JSON.parse(JSONSampleObject2);


//Sending Get Request to get JSON data through AJAX
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if (this.status===200 && this.readyState===4){
        let p =document.createElement("ul")
        let footer=document.querySelector("footer")
        footer.appendChild(p);
        var response=xhttp.responseText;
        var responseObject=JSON.parse(response);
        let responseList=responseObject.person
        let object ="";
        responseList.forEach(element => {
            object+=`<li> ${element.name} </li>`;
        });
        p.innerHTML=object;
    }
}
xhttp.open("GET","json.json",true);
xhttp.send()





//The best way to write the below JS Object in JSON is shown in the json.json file
let person=[
    {
        name:"Astitva",
        age:19
    },
    {
        name:"Ashish",
        age:21
    },
    {
        name:"Vaibhav",
        age:21
    }
]