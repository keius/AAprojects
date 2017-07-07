import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';

document.addEventListener('DOMContentLoaded', ()=>{
  ReactDOM.render(<Clock />, document.getElementById('clock'));
  ReactDOM.render(<Weather />, document.getElementById('weather'));
});
