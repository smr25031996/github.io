const { MongoClient } = require('mongodb');

async function retrieveData() {
  const uri = 'mongodb+srv://rajputshubham615:Rshubham@13@cluster0.yuydrt1.mongodb.net/'; // Corrected connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the database');

    const database = client.db('jewels@99'); // Replace with your database name
    const collection = database.collection('jewels_info');

    const query = {};

    const result = await collection.find(query).toArray();

    console.log('Retrieved data:');
    console.log(result);
  } catch (err) {
    console.error('Error retrieving data', err);
  } finally {
    await client.close();
    console.log ('Connection closed');
  }
}

retrieveData().catch(console.error);
