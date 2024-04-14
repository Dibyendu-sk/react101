import {useState} from "react";

function App(){
    const [count,/*setter for count*/setCount]=useState(0); // set default value of count to 0.
    const handleClick=()=>{
        setCount(count+1) // updating the value of count
    }
    return <div>
        <button onClick={handleClick}>Add Animal</button>
        <div>Number Of Animals : {count}</div>
    </div>
}
export default App;