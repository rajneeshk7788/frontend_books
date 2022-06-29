import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NavBar from './NavBar'

const AddBook = () => {
// const [name,setName]=useState("")
const [title,setTitle]=useState('')
const [bname,setBname]=useState("")
const [bprice,setBprice]=useState('')
const [bpage,setBpage]=useState('')
const nam = useSelector((e)=>e.data.data)
console.log(nam)


const handleClick=(e)=>{
  // e.preventDefault()
  const books={
    name:nam.user.name,
    title:title,
    b_name:bname,
    b_price:bprice,
    b_page:bpage    
  }

  axios.post(`http://localhost:3300/books`,books)
  alert('Book Added Succfully')
  // ?console.log(books)
}

  return (
    <div>
      <NavBar/>
      <form>
        {/* <input type="text" placeholder='Enter User Name' onChange={(e)=>setName(e.target.value)} /> */}
        <input type="text" placeholder='Enter Book Title' onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder='Enter Book Name' onChange={(e)=>setBname(e.target.value)} />
        <input type="text" placeholder='Enter Book Price' onChange={(e)=>setBprice(e.target.value)} />
        <input type="text" placeholder='Enter Book Page' onChange={(e)=>setBpage(e.target.value)} />

        <button onClick={(e)=>handleClick(e)}>Add</button>
      </form>
    </div>
  )
}

export default AddBook