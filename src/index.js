// Import react and react dom libraries
import React from "react";
import ReactDOM from 'react-dom/client';
import App,{message} from "./App"; // we can Rename the First App as this is a default export (ref - App.js)
// We can't rename the message as it is a named export, also we have to write it in {}.

// get a reference to the div with id 'root'
const element=document.getElementById('root');

//tell react to take control of that element
const root=ReactDOM.createRoot(element);
console.info(message+" there")
//show the component on the screen
root.render(<App />);
