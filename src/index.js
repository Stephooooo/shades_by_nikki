import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';
import Gallery from './pages/gallery';
import ContactUs from './pages/contactUs'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Services/>} />
  <Route path="/aboutUs" element={<AboutUs/>} />
  <Route path="/gallery" element={<Gallery/>} />
  <Route path="/contactUs" element={<ContactUs/>} />
  </Routes>

  </BrowserRouter>
   
  </React.StrictMode>
);

