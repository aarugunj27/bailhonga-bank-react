import React from "react";
import Home from './components/index.js'
import About from './components/about.js'
import Loans from './components/loans_deposits.js'
import Contact from './components/contact.js'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.js';
import Footer from './components/footer.js';
import AnnouncementBar from "./components/announcementbar.js";
import PageNotFound from "./components/404.js";

export default function App() {
  return (
    <div className="App">
      <AnnouncementBar/>
      <NavBar/>
      <Routes>
        <Route exact path="*" element={ <PageNotFound/> } />
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route exact path="/loans" element={ <Loans/> } />
      </Routes>
      <Footer />
    </div>
  );
}