import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Homepage } from './components/homepage/Homepage.js';
import { Derapy } from './components/Derapy.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Homepage />
      <Derapy />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
