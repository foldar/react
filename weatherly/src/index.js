import React from 'react';
import ReactDOM from 'react-dom/client';
import Weatherly from "./weatherly.js";

const data = require('http://api.weatherapi.com/v1/current.json?key=a6ddf4f347da4c3f87e104349220707&q=');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Weatherly/>);
