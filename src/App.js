
import React from 'react';
import Main from './components/main.js';
import './assets/scss/App.scss';
import Navbar from './components/navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
    </BrowserRouter>
  );
}

export default App;

