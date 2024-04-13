const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
//This specifies the port where we can access our MongoDB database server

const path =url +'/equipsDB';
//This is the complete path of the name of databse that we want to create or connect to 

mongoose.connect(path);


// Schema :
// Blueprint or structure of data that we are going to save into our MongoDB database.In schema we create an object that has info about -> how we want data in a particular collection to be structured.This lays out the foundation for every new equip document(record) that wull be added to our database .

//CREATION PHASE

// const equipsSchema=new mongoose.Schema({
//     _id:Number ,
//     name:String ,
//     rating:Number,
//     review:String
// })

//now we use this schema to create a mongoose model

// const Equipments = mongoose.model('Equipment',equipsSchema)

//first parameter -> name of collection that is going to comply with the schema created above(write in singular , it automatically converts to plural)
//All the fruits inside the 'Fruits' Collection will comply to schema given in the second parameter
//This 'Equipments' is a mongoose model


//Create a new equip document
// const equip=new Equipments({
//     _id:2,
//     name:'Boots',
//     rating:8,
//     review:"Kiss it and you become divine"
// })

// equip.save()
//This saves the equip document inside the Equipments collection of the equipsDB database ( in accordance with the schema given)

// const personSchema=new mongoose.Schema({
//     name:String,
//     age:Number
// })

// const persons = mongoose.model("Person",personSchema)

// const person = new persons({
//     name:'John',
//     age:20}
// )

// person.save()

// const person2=  new persons({
//     name:"Arihant",
//     age:20
// })
// const person3=  new persons({
//     name:"Ramit",
//     age:23
// })
// const person4 =  new persons({
//     name:"rachit",
//     age:22
// })
//to insert multiple documents into a collection , use 
// persons.insertMany([person2,person3,person4],(err)=>{
//     if (err) console.log("error");
//     else console.log("Multiple records added successfully")
// })


//READ OPERATIONS
// persons.find((err,data)=>{
//     if(err) console.log(err);
//     else {
//         mongoose.connection.close()
// //Always close the connection once you are done
//         data.forEach((d)=>{
//             console.log(d.name);
//         })
//     }
// })


//DATA VALIDATION
//Instead of writing our own assert statements , we can use the Mongoose's built in validation checks

//Inside Schema , we can add not just data type but also validation for the columns of the table

const personSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    age:Number,
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:{
        type:String,
    }
})

const Person=mongoose.model('Person',personSchema);

const person = new Person({
    age:1,
    rating:1
})

// person.save()

// const error= person.validateSync()
// console.log(error.errors.name.properties)

// UPDATING AND DELETING DATA USING DATABASE
//UPDATING
const run = async()=>{
    const res = await Person.updateOne({age:1},{name:'Bagghad'})
    console.log(res);
}
//We cant update fields that are not specified in the schema

const del=async()=>{
    const del = await Person.deleteMany({name:"John"})
    console.log(del);
    await mongoose.connection.close();
}
// mongoose.connection.close();
del()