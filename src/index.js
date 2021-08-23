import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Login from './containers/Login';
import Navbar from './containers/Navbar';

import './css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Login/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

