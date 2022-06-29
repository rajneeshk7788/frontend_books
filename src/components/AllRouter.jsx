import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddBook from './AddBook'
import AllBook from './AllBook'
import BooksDetail from './BooksDetail'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import PrivateRout from './PrivateRout'
import Register from './Register'


const AllRouter = () => {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/books' element={<PrivateRout><AddBook /></PrivateRout>}></Route>
        <Route path='/' element={<PrivateRout><Home /></PrivateRout>}></Route>
        <Route path='/allbooks' element={<PrivateRout><AllBook /></PrivateRout>}></Route>
        <Route path='/books/:id' element={<BooksDetail />}></Route>

      </Routes>
    </div>
  )
}

export default AllRouter