import React,{useState} from "react"
import axios from "axios"

function App(){

 const [username,setUsername]=useState("")
 const [password,setPassword]=useState("")

 const login=async()=>{

  const res = await axios.post("/api/auth/login",{
   username,
   password
  })

  alert("Login success. Token: "+res.data.token)
 }

 return(
  <div style={{padding:"40px"}}>

   <h2>DevOps Login</h2>

   <input
   placeholder="username"
   onChange={e=>setUsername(e.target.value)}
   />

   <br/><br/>

   <input
   type="password"
   placeholder="password"
   onChange={e=>setPassword(e.target.value)}
   />

   <br/><br/>

   <button onClick={login}>Login</button>

  </div>
 )
}

export default App
