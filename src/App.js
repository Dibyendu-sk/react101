// create component (Component is a function that returns a jsx)
function App(){
    const inputeType="number"
    const min=5
    const message="Enter Your Age"
    return (
        <input
            min={min}
            maxLength={5}
            spellCheck
            placeholder={message}
            style={{color:"navy"}}
        />
        // <textarea
        //     autoFocus={true}
        // />
    ) // writing this doesn't make anything show up in the browser, this creates an instruction telling it to make an element, We have to return it from a component to use it.
}
export default App;
const message='Hello'
export {message}; // for named export we have to write it in {}.
