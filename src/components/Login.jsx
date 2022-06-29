import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from "axios";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router';
import { AuthAction, DataAction } from '../Redux/Actions/Action';




const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const isAuth = useSelector((e) => e.data.isAuth);
  // const dk = useSelector((e) => e.data.data);
  const dis = useDispatch();

  const navigate = useNavigate()
  let dat = JSON.parse(localStorage.getItem("data"));
  // console.log(dat);


  useEffect(() => {
    if (dat) {
      dis(AuthAction(true));
      dis(DataAction(dat));
      navigate('/', { replace: true })
    }
  }, []);

  const handleClick = (e) => {
    // e.preventDefault()
    if (email == "" || pass == "") {
      alert("can Not be Empty input area")
    } else {
      const data = {
        email: email,
        pass: pass
      }
      axios.post(`http://localhost:3300/login`, data).then((e) => {
        dis(AuthAction(true));
        dis(DataAction(e.data));
        localStorage.setItem("data", JSON.stringify(e.data))
        setTimeout(
          console.log("Login successfully")
          , 500);
        navigate('/', { replace: true })
      });
    }
    if (email != "" || pass != "") {
      if (!isAuth) {
        setTimeout(
           alert("Enter Valid data")
          , 1000);
      }
    }
  }

  return (
    <div>
      <NavBar />
      <input type="text" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder='Enter your password' onChange={(e) => setPass(e.target.value)} required />
      <button
        onClick={(e) => handleClick(e)}
      >Login</button>
    </div>
  )
}

export default Login