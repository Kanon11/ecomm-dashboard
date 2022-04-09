
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter, Routes,
  Route } from 'react-router-dom';
import  Login from './Login';
import Register from './Register';
import Addproduct from './Addproduct';
import Updateproduct from './Updateproduct';
import Protected from './Protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        {/* <h1>Stationary Product Sell</h1> */}
        <Routes>
          <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={Addproduct} />}  />
          <Route path="/update/:id" element={<Protected Cmp={Updateproduct} />} />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
          <Route path="/" element={<Protected Cmp={ProductList} />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
