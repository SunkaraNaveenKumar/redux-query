import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import User from './Users/User'

const Navigation = () => {
  return (
    <div>
        <div>
        <Link to="/">Home</Link>  |
        <Link to="/users">Users</Link>  |
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/users' element={<User/>}/>
</Routes>
        </div>
    </div>
  )
}

export default Navigation