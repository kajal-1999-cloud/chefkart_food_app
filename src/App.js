import React from "react";
import "./App.css";
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/home";
import ProductPage from "./pages/ProductPage/ProductPage";
import ContextDataProvider from "./data/DataProvider";
function App() {
  return (
    <ContextDataProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productPage/:id" element={<ProductPage/>}/>
      </Routes>
    </ContextDataProvider>
  );
}

export default App;
