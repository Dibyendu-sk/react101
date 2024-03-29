// Import react and react dom libraries
import React from "react";
import ReactDOM from 'react-dom/client';

// get a reference to the div with id 'root'
const element=document.getElementById('root');

//tell react to take control of that element
const root=ReactDOM.createRoot(element);

// create component (Component is a function that returns a jsx)
function App(){
    return <h1>Hello World !</h1>
}
//show the component on the screen
root.render(<App />);