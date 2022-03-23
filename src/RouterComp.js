import React from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveDrawer from './pages/ResponsiveDrawer';
import NavBar from './components/navigation_bar/NavBar';

const RouterComp = () => {
  return (
    <Router>
      <NavBar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Login/>}/>
          <Route path='/page1' element={<ResponsiveDrawer/>}/>
        </Routes>   
    </Router>
  )
}

export default RouterComp

{/* <Router>
      <NavBar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Login/>}/>
          <Route path='/page1' element={<ResponsiveDrawer/>}/>
        </Routes>   
    </Router> */}