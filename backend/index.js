const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/Post');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT||9000;

app.use(cors());


//connect mongoDB via mongoose
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Db connected sucessfully")
}).catch((err)=>{
    console.log("No connection");
});

app.use(express.json());

app.use("/posts",postRoutes);

app.use((err,req,res,next)=>{
    res.status(500).json({message: err.message});
});

app.listen(PORT,()=>{
    console.log(`express is running on server ${PORT}`);
});