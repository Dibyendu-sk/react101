import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import cat from './svg/cat.svg'
import horse from './svg/horse.svg'
import  dog from './svg/dog.svg'
import  croc from './svg/croc.svg'
import heart from './svg/heart.svg'
import {useState} from "react";
import './css/AnimalShow.css'

const svgMap={
    bird,
    cow,
    cat,
    dog,
    horse,
    croc
}
function AnimalShow({animalType}){
    const [clicks,setClick]=useState(0)
    const handleClick=()=>{
        setClick(clicks+1)
    }
    return (
        <div className={"animal-show"} onClick={handleClick}>
            <img className={"animal"} src={svgMap[animalType]} alt={"agckag"}/>
            <img className={"heart"} src={heart} alt={"heart.img"} style={{
                width:'30px'
            }}/>
            <span>{clicks}</span>
        </div>
    )
}
export default AnimalShow;