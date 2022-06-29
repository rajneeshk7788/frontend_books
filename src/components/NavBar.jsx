import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { AuthAction } from '../Redux/Actions/Action';



const NavBar = () => {
  const dis = useDispatch();
const isAuth = useSelector((e)=>e.data.isAuth);

const handle = ()=>{
dis(AuthAction(false));
localStorage.removeItem("data");
}

  return (
    <div className='nave'>
      <div>
        <Link to='/'>Home</Link>
      </div> 
      <div>
        <Link to='/books'>Books</Link>
      </div>
      <div>
        <Link to='/allbooks'>AllBooks</Link>
      </div>
      <div>
        <Link to='/register'>Register</Link>
      </div>
      <div>
        <Link to='/login' onClick={handle}>{isAuth ? "LogOut" : "LogIn"}</Link>
      </div>
      

    </div>
  )
}

export default NavBar