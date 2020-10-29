import React,{ useEffect,useState } from "react"
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;


const Random = ()=>{

    const [gif,setGif] = useState("");
    
    const fetchData = async()=>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
        const { data } = await axios.get(url); // promise 
        
       
        setGif(data.data.images.downsized_large.url);

    }
    
    //COMPONENT DID MOUNT -> first render [] empty
    useEffect(() => {
        fetchData();
    }, [])
    
    const handleClick = ()=>{
        fetchData();
    }

    return (
    <div className="container">
       <h1>Random Gif Generator</h1>
       <img width="500"  src={gif} alt="Gif"></img>
       <button onClick={handleClick}>New Gif</button>
    </div>
    );
}

export default Random;