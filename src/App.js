import { Route, Routes } from 'react-router-dom';
import React from "react";
import Home from './pages/index.js';
import About from './pages/about.js';
import Services from './pages/services.js';
import Contact from './pages/contact.js';
import PageNotFound from './pages/404.js';
import Success from "./components/success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='*' element= { <PageNotFound/> } />
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about.js" element={ <About/> } />
        <Route exact path="/services.js" element={ <Services/> } />
        <Route exact path="/contact.js" element={ <Contact/> } />
        <Route exact path="/success.js" element={ <Success/> } />
      </Routes>
    </div>
  );
}

export default App;
