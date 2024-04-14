
function App(){
    const handleClick=()=>{
        alert("Button Was Clicked");
    }
    return <div>
        {/*<button onClick={handleClick}>Add Animal</button>*/}
        {/*we can also write ir like this*/}
        <button onClick={()=>alert("Button Was Clicked")}>Add Animal</button>
    </div>
}
export default App;