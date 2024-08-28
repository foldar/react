import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemPicker from "./components/itempicker.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ItemPicker maxCounter={6} pictureWidth={60} pictureHeight={60}/>);
