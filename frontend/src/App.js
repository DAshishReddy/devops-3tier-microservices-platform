import React,{useState} from "react"
import axios from "axios"

function App(){

 const [username,setUsername] = useState("")
 const [password,setPassword] = useState("")

 const login = async ()=>{

  const res = await axios.post("http://backend:3000/api/auth/login",{
   username,
   password
  })

  alert("Token: "+res.data.token)
 }

 return(
  <div>
   <h2>DevOps Login</h2>

   <input
   placeholder="username"
   onChange={e=>setUsername(e.target.value)}
   />

   <input
   placeholder="password"
   type="password"
   onChange={e=>setPassword(e.target.value)}
   />

   <button onClick={login}>Login</button>

  </div>
 )
}

export default App
