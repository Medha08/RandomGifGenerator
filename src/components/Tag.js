import React,{ useEffect,useState } from "react"
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;


const Tag = ()=>{
    const [tag,setTag] = useState("dogs")
    const [gif,setGif] = useState("");
    
    const fetchData  = async(tag)=>{
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    
        const { data } = await axios.get(url); // promise 
        
       
        setGif(data.data.images.downsized_large.url);

    }
    
    //COMPONENT DID MOUNT -> first render [] empty
    useEffect(() => {
        fetchData(tag);
    }, [tag])
    
    const handleClick = ()=>{
        fetchData(tag);
    }

    return (
    <div className="container">
       <h1>Random {tag} Gif Generator</h1>
       <img width="500"  src={gif} alt="Gif"></img>
       <input value={tag} onChange={(e)=> setTag(e.target.value)}></input>
       <button onClick={handleClick}>New Gif</button>
    </div>
    );
}

export default Tag;