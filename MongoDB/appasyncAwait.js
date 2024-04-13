const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    const sample_mflix = client.db('sample_mflix');
    //Creates a database named 'samplez_mflix' and attaches it to the constant 'database' of JS for further use

    const movies = sample_mflix.collection('movies');
    //Creates a collection named 'movies' inside the database named 'sample_mflix' and stores it in the constant 'movies' of JS for further use

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };

    const movie = await movies.findOne(query);
    console.log(movie);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
client.connect((err)=>{
    run().catch(console.dir);
})

