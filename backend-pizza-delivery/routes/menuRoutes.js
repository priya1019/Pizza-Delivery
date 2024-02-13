const express=require('express')
const jwt=require('jsonwebtoken')
const router = express.Router()
const jwtSecret="ddsfftyy677yttfff";
const menuModel=require('../db/menuSchema');
const dataModel=require('../db/dataSchema');
const orderModel=require('../db/orderSchema')
function autenticateToken(req,res,next){
  const authHeader=req.headers['authorization'];
  const token=authHeader && authHeader.split(' ')[1];
  console.log(token)
  if(token==null){
      res.json({"err":1,"msg":"Token not match"})
  }
  else {
      jwt.verify(token,jwtSecret,(err,data)=>{
          if(err){
              res.json({"err":1,"msg":"Token incorrect"})
          }
          else {
              console.log("Match")
              next();
          }
      })
  }
}
router.post("/register",(req, res)=>{
  let email = req.body.email;
  let password = req.body.password;
  let name = req.body.name;
  let confpassword=req.body.confpassword;
  let ins = new dataModel({name:name, email:email, confpassword:confpassword, password:password});
  ins.save((err)=>{
      if(err) {res.json({"err":"Already added"})};
      res.json({"msg":"Registered Successfully"})
  })
})
router.post("/login",(req, res)=>{
    console.log(req.body)
  let email = req.body.email;
  let password = req.body.password;
  dataModel.findOne({email:email, password: password}, (err,data)=>{
      if(err){res.json({"err":err})}
      if(data===null){
          res.json({"err":"Email or Password Incorrect"})
      }
      else{
          let payload={
              uid:email
          }
          const token=jwt.sign(payload,jwtSecret,{expiresIn:360000})
          res.json({"msg":"Logged in Successfully","token":token})
      }
  })
})
router.get("/products",autenticateToken,(req, res)=>{
  menuModel.find({}, (err, products)=>{
      if(err) {
          res.json({"err":err})
      }
      else{
          res.json({"products":products});
      }
  })
})
router.get("/cart/:item/:price/:email", (req, res)=>{
  let item = req.params.item;
  let email = req.params.email;
  let price = req.params.price;
  orderModel.find({name:item, email:email, checkout: false},(err, data)=>{
      if(err) {res.json({"err":err})}
      if(data.length===0){
          let ins_order = new orderModel({name: item, email: email, price:price, quantity:1, checkout: false});
          ins_order.save((err)=>{
              if(err) {res.json({"err":err})};
              res.json({"msg": "Order Successful"})
          })
      }
      else{
          orderModel.updateOne({name:item},{$inc:{quantity: +1}}, (err)=>{
              if(err) throw err;
              res.json({"msg": "Added Again"})
          })
      }
  })
})
router.get("/orders/:email", (req, res)=>{
  let email = req.params.email;
  orderModel.find({email:email, checkout:false},(err, data)=>{
      if(err) {res.json({"err":err})}
      if(data.length===0){
          res.json({"msg":"Order is not placed"})
      }
      else{
         res.json({"orders":data});
      }
  });
})
router.delete("/deleteorder/:id",(req, res)=>{
  let id = req.params.id;
  orderModel.deleteOne({_id:id}, (err)=>{
      if(err) throw err;
      res.json({msg:"Item Deleted Successfully"})
  })
})
router.get("/checkout/:email", (req, res)=>{
  let email = req.params.email;
  orderModel.updateMany({email:email, checkout:false},{$set:{checkout: true}}, (err)=>{
      if(err) throw err;
      res.json({"msg": "Updated Successfully"})
  })
})
router.get("/allorders/:email", (req, res)=>{
  let email = req.params.email;
  orderModel.find({email:email},(err, data)=>{
      if(err) {res.json({"err":err})}
      if(data.length===0){
          res.json({"msg":"Order is not placed"})
      }
      else{
         res.json({"orders":data});
      }
  });
})
router.get("/profile/:email", (req, res)=>{
  let email = req.params.email;
  dataModel.findOne({email:email}, (err, data)=>{
      if(err) res.json({err:err})
      res.json({user:data});
  })
})
router.put('/updprofile/:id', (req, res)=>{
  let id = req.params.id;
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let confpassword=req.body.confpassword;
  dataModel.updateOne({_id:id},{$set:{name:name, email:email, password:password, confpassword:confpassword}}, (err)=>{
      if(err) res.json({err:err});
      res.json({msg:"Profile Updated Successfully"});
  })
})
module.exports= router