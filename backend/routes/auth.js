const router = require("express").Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

router.post("/register", async (req,res)=>{

 const hashedPassword = bcrypt.hashSync(req.body.password,8)

 const user = new User({
  username: req.body.username,
  password: hashedPassword
 })

 await user.save()

 res.send("User registered")
})

router.post("/login", async (req,res)=>{

 const user = await User.findOne({username:req.body.username})

 if(!user) return res.status(404).send("User not found")

 const passwordValid = bcrypt.compareSync(req.body.password,user.password)

 if(!passwordValid) return res.status(401).send("Invalid password")

 const token = jwt.sign({id:user._id},"devops-secret",{expiresIn:86400})

 res.json({token})
})

module.exports = router  
