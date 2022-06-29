import React from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'

const Home = () => {
  const data = useSelector((e)=>e.data.data);
  return (
    <div>
        <NavBar/>
        <h2>{data.user.name}</h2>
    </div>
  )
}

export default Home