// Import react and react dom libraries
import React from "react";
import ReactDOM from 'react-dom/client';

// get a reference to the div with id 'root'
const element=document.getElementById('root');

//tell react to take control of that element
const root=ReactDOM.createRoot(element);

// create component (Component is a function that returns a jsx)
function App(){
    let message="Bye There !";
    let randomNum=Math.random()
    if (randomNum>0.5){
        console.log(randomNum)
        message="Hello There !!!"
    }
    return <h1>{message}</h1> // writing this doesn't make anything show up in the browser, this creates an instruction telling it to make an element, We have to return it from a component to use it.
}

//show the component on the screen
root.render(<App />);
