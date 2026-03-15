const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/auth")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://mongodb:27017/devopsdb", {
 useNewUrlParser: true,
 useUnifiedTopology: true
})

app.use("/api/auth", authRoutes)

app.get("/", (req,res)=>{
 res.send("DevOps Backend Running")
})

app.listen(3000, ()=>{
 console.log("Server running on port 3000")
})
