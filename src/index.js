// Import react and react dom libraries
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
// get a reference to the div with id 'root'
const element=document.getElementById('root');

const root=ReactDOM.createRoot(element);
root.render(<App />);
