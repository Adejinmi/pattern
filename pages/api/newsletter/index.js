import nextConnect from 'next-connect';
import Cors from 'cors';
import middleware from '../../../middleware/database';
import NextCors from 'nextjs-cors';
var MongoClient = require('mongodb').MongoClient;


  // Initializing the cors middleware
  const cors = Cors({
    methods: ['GET', 'HEAD'],
  })
  
  // Helper method to wait for a middleware to execute before continuing
  // And to throw an error when an error happens in a middleware
  function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }
  
  async function handler(req, res) {
    await runMiddleware(req, res, cors)

    const mail =req.body.data
    const payload ={email: mail}
    console.log(payload)
    MongoClient.connect('mongodb+srv://root:root@cluster0.rw3cc.mongodb.net/pattern?retryWrites=true&w=majority', function (err, client) {
    if (err) res.send('Error in Connection')
    var db = client.db('pattern')
    db.collection('newsletter').insertOne(payload, function (err, result) {
    if (err) res.status(400)
    else res.send('Inserted Succesfully')

  })
  })
}
  
  export default handler