const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
  const user = await User.find().lean().exec();
  return res.status(200).send({ user });
});

//signup api
router.post("/createuser", async (req, res) => {
  const checkmail = await User.find({email: req.body.email}).count().lean().exec();
  const checkmobile = await User.find({mobile: req.body.mobile}).count().lean().exec();
  if(checkmail >= 1 && checkmobile >= 1)
  {
    return res.status(400).send({
      message: 'Mobile number and email id are already exist!'
   });
   
  }
  else if(checkmail >= 1){
    return res.status(400).send({
      message: 'email id is already exist!'
   });
  }
  else if(checkmobile >= 1){
    return res.status(400).send({
      message: 'Mobile number is already exist!'
   });
  }
  else{
    const user = await User.create(req.body);
      return res.status(201).send(user);
  }  
});

//login api
router.post("/login", async (req, res) => {
  // const checkmail = await User.find({email: req.body.email}).count().lean().exec();
  const checkmobile = await User.find({mobile: req.body.mobile}).count().lean().exec();
  if(checkmobile >= 1)
  {
    return res.status(400).send({
      otp: '2222'
   });
  }
  else{
    return res.status(400).send({
      message: 'User does not exist'
   });
  }  
});


router.post("/find", async (req, res) => {
  const id = req.query.id;
  const user = await User.findById(id).lean().exec();
  return res.status(200).send({ user });
});

module.exports = router;