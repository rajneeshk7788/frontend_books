import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'



const AllBook = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3300/books`).then((e)=>setData(e.data))
    },[])
    console.log(data)
  return (
    <div>
        <NavBar/>
        <div>
            {data.map((e)=>(
                <div className='container'>
                    <Link to={`/books/${e._id}`}>{ e.b_name}</Link>
                   
                </div>
            ))}
        </div>

    </div>
  )
}

export default AllBook