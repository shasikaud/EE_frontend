import React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersistentDrawerLeft from './pages/ResponsiveDrawer';



function App() {

  const [navBarState, setNavBarState] = useState(true)

  return (
    <div>
      <Router>
        <PersistentDrawerLeft/>  
      </Router>
    </div>
  );
}

//{ navBarState ? <RouterComp/> : null }

export default App;
