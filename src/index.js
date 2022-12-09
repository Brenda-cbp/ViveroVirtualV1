import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import NavbarVivi from './components/navbar/NavbarVivi';
import Footer from './components/footer/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import "./custom.scss"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <NavbarVivi/>
    <Footer/>
  </React.StrictMode>
  </BrowserRouter>
  
);

