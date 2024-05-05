import {useState} from "react";

function SearchBar({onSubmit}) {
    // const handleClick=()=>{
    //     onSubmit("cars")
    // }
   // for handling ENTER key press

    // event is present by default whenever we do some operations on html elements
    const [enteredVal,setEnteredVal]=useState('');
    const handleSubmit=(event)=>{
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        onSubmit(enteredVal);
    }
    //For handling input field
    const handleChange=(event)=>{
        console.log(event.target.value);
        var value = event.target.value;
        setEnteredVal(value)
    }
    return <div>
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={enteredVal}/>
        {/*<button onClick={handleClick}>--></button>*/}
        </form>
    </div>
}
export default SearchBar;