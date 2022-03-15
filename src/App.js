
import './style/App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Header } from './componet/header/Header';
import { SingleMovie } from './pages/SingleMovie';
import {SearchListing} from './pages/SearchListing'
function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:id' element= {<SingleMovie/>} />
        <Route path='/search/:movie' element ={<SearchListing/>}/>
      </Routes>
    </>
  );
}

export default App;
