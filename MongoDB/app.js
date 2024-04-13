//assert is required for testing operations.It validates our data entry and our  connection to the MongoDB database

const MongoClient = require('mongodb').MongoClient;

const assert=require('assert');

//Connection URL
const url='mongodb://localhost:27017';
//This is the base URL for connecting to the database

//Database Name
const dbName='equipments'

//Create a new MongoClient to connect to the desired database.
const  client = new MongoClient(url);

//Using connect method of the client to connect to the database
client.connect((err)=>{
    assert.equal(null,err);
    console.log("connection established to the server")
    //If connection to the server happened successfully without any error(s)

    const db =client.db(dbName);
    //creation of a databse with the name dbName

    // Close connection to the database only when documents inserted to the collection of the db
    // insertDocuments(db,()=>{client.close()})
    findDocuments(db,()=>{
        client.close();
    })
})

const insertDocuments=(db,callback)=>{
//Creating a new collection named equips
    const collection =db.collection('equips')
//Inserting 2 records
    collection.insertMany([{
        name:"Spikes",
        review:"The best thing you will ever encounter your entire life"
        },{
        name:'Body with courage',
        review:"Yup you need that as well to play"
        }],(err,result)=>{

//Validations to make sure that there are no errors while inserting data
            assert.equal(err,null);

//Validate to make sure that there are 2 results inserted into the collection
// assert.equal(2,result.result.n);
// assert.equal(2,result.ops.length);
            console.log("Inserted 3 documents into the collection");
            callback(result);
    })
}

const findDocuments=(db,callback)=>{
    //Getting the equips collection
    const collection=db.collection('equips');

    //Find some documents
    collection.find({}).toArray((err,tool)=>{
//All the records saved into an array named as tool
        assert.equal(null,err);
        console.log('Found the following record');
        console.log(tool);
        callback(tool);
    })
}