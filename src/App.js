import React from "react";
import "./App.css"
import Tag from "./components/Tag_v1";
import Random from "./components/Random_v1";

const App = ()=>(
    <div>
        <h1>Random GIF Application</h1>
        <div className="main-container">
            <Random/>
            <Tag/>
        </div>
    </div>
)

export default App;