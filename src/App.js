import {useState} from "react";
import AnimalShow from "./AnimalShow";
import './css/App.css'

function getRandomAnimal(){
    const animals=["cat","dog","cow","croc","horse","bird"];

    return animals[Math.floor(Math.random()*animals.length)]
}
function App(){
    const [animals,setAnimal]=useState([]);
    const handleClick=()=>{
        setAnimal([...animals,getRandomAnimal()])
    }
    const renderedAnimals=animals.map(
        (item,index)=>{
            return <AnimalShow animalType={item} key={index}/>
        }
    )
    return <div className={"app"}>
        <button onClick={handleClick}>Add Animal</button>
        <div className={"animal-list"}>{renderedAnimals}</div>

    </div>
}

export default App;