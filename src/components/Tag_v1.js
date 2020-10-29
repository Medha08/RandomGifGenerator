import React,{ useState } from "react"
import useGif from "./useGif";

const Tag = ()=>{
    const [tag,setTag] = useState("dogs")
    const {gif,fetchData} = useGif(tag);
    

    return (
    <div className="container">
       <h1>Random {tag} Gif Generator</h1>
       <img width="500"  src={gif} alt="Gif"></img>
       <input value={tag} onChange={(e)=> setTag(e.target.value)}></input>
       <button onClick={()=> fetchData(tag)}>New Gif</button>
    </div>
    );
}

export default Tag;