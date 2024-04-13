const mongoose=require('mongoose');
const path = 'mongodb://localhost:27017/relationships';
mongoose.connect(path);



const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String,
})

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit : fruitSchema,
    //this tells mongoose that we are embedding inside the property favouriteFruit of the person document
})

const Fruits= mongoose.model("Fruit",fruitSchema);
const People= mongoose.model("Person",personSchema);

module.exports=[fruitSchema,personSchema];

const fruit1 = new Fruits({
    name:"Mango",
    rating:10,
    review:"Delicious from the get go"
})

// const fruit2 = new Fruits({
//     name:"Banana",
//     rating:8,
//     review:"Ligament me bhar jaana chahiye ekdam"
// })
// fruit1.save()
// const people1=new People({
//     name : "Astitva",
//     age:19
// })

// const people2=new People({
//     name:"Vaibhav",
//     age:20,
//     favouriteFruit:fruit1,
// })

// people2.save()

// People.insertMany([people1,people2],(err,data)=>{
//     console.log(data);
// })


// Note1 -> You cant have a new field updated to a record thats not specified in the schema of the collection
//Schema is also a data type


