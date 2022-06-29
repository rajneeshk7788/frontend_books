import axios from 'axios';
import React, { useState } from 'react';
import NavBar from './NavBar'
import {useNavigate} from "react-router-dom"


const Register = () => {
  const [name, setName]= useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [pass,setPass]=useState("");
  const navi = useNavigate();

  const handleData = (e)=>{
    e.preventDefault(); 
    const data={
      name:name,
      email:email,
      phone:phone,
      pass:pass
    }
  axios.post(`http://localhost:3300/register`,data).then((e)=>{
    if(e.data){
      navi("/login", {replace: true});
    }});
  }

  return (
    <div>
      <NavBar/>
      <form >
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter your Phone' onChange={(e)=>setPhone(e.target.value)}/>
        <input type="text" placeholder='Enter your password' onChange={(e)=>setPass(e.target.value)} />
        <button onClick={(e)=>handleData(e)}>Submit</button>

      </form>
    </div>
  )
}

export default Register