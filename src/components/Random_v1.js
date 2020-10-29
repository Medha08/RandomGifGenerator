import React from "react";
import useGif from "./useGif";

const Random = ()=>{
    const {gif,fetchData} = useGif()

    return (
    <div className="container">
       <h1>Random Gif Generator</h1>
       <img width="500"  src={gif} alt="Gif"></img>
       <button onClick={fetchData}>New Gif</button>
    </div>
    );
}

export default Random;