const mongoose = require('mongoose');


const MongoClient = require('mongodb').MongoClient;
const URI = "mongodb+srv://akshita123:akshita123@akshita-yjs1o.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async()=>{
  await mongoose.connect(URI,{ useUnifiedTopology: true,useNewUrlParser: true });
  console.log('db connected');
}

module.exports = connectDB;
