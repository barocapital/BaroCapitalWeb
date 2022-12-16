import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Content from './Content/Content';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
