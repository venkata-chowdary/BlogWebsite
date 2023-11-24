import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import IndividualBlog from './components/IndividualBlog';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <Router>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreatePost/>}></Route>
        <Route path='/blog/:targetId' element={<IndividualBlog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App;
