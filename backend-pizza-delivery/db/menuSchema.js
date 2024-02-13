const mongoose=require('mongoose')
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model("pizzaapp",menuSchema);