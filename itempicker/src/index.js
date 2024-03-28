import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemPicker from "./components/itempicker.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ItemPicker MaxCounter={6}/>);
