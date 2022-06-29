import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const BooksDetail = () => {
 
    const [data,setData]=useState({})

    const {id}=useParams()
    console.log(id)

    useEffect(()=>{
        axios.get(`http://localhost:3300/books/${id}`).then((e)=>setData(e.data))
    },[])
console.log(data);
  return (
    <div>
        <h1>Title: {data.title}</h1>
        <p>Name: {data.name}</p>
        <p>Book Name: {data.b_name} </p>
        <p>Book Page: {data.b_page} </p>

    </div>
  )
}

export default BooksDetail