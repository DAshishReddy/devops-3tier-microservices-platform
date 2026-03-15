const router = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/register",async(req,res)=>{

 const hashed = bcrypt.hashSync(req.body.password,8)

 const user = new User({
  username:req.body.username,
  password:hashed
 })

 await user.save()

 res.send("User registered")
})

router.post("/login",async(req,res)=>{

 const user = await User.findOne({username:req.body.username})

 if(!user) return res.status(404).send("User not found")

 const valid = bcrypt.compareSync(req.body.password,user.password)

 if(!valid) return res.status(401).send("Invalid password")

 const token = jwt.sign({id:user._id},"devops-secret",{expiresIn:86400})

 res.json({token})
})

module.exports = router
