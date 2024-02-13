const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const PORT=7000;
const app=express();
//dbconnection 
const db="mongodb://localhost:27017/test";
const connectDB=async()=>{
    try{
      await mongoose.connect(db,{useNewUrlParser:true});
      console.log("MongoDb Connected");
    }
    catch(err){
      console.log(err.message);
    }
  }
  connectDB();
//end
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())
const menuRoutes =require('./routes/menuRoutes')
app.use("/api/menus",menuRoutes)
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Working on ${PORT}`)
})
