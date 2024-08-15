const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//make app-port-what the app uses
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const URI="mongodb+srv://porrangiy:fV3ADPQxDO8FNj15@cluster0.lv9gioc.mongodb.net/books"

const Routs = require('./routes')
app.use('/books',Routs);

mongoose.connect(URI,/*{ useNewUrlParser: true,useUnifiedTopology: true */)
.then(console.log("connected to mongoDB"))
.catch((err)=>console.log("err connecting to DB"+err))

app.listen(port,()=>{console.log(`running on port ${port}`)})