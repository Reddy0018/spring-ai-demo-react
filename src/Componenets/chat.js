import React, { useState } from "react";
import './RecipeGenerator.css'; // Import the CSS file for styling

function ChatComponent() {

    const [prompt, setPrompt] = useState('');
    const  [chatresponse, setChatresponse] = useState('');
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        setLoading(true);
        try{
            const response = await fetch(`http://localhost:8080/GitHubAI/getResponse?prompt=${prompt}`) //Added Free Endpoint 
            const data = await response.text();
            setChatresponse(data);
        }catch(error){
            console.error("Error Generating the Chat: " +error);
        }finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Talk to AI</h2>
            <input type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Enter your prompt" />
            <button onClick={askAI}>Ask AI</button>
            {/* <div className="output">
                <p>{chatresponse}</p>
            </div> */}
            <div className="output">
                {loading ? <div className="spinner"></div> : <pre className="recipe-text">{chatresponse}</pre>}
            </div>
        </div>
    );
} 

export default ChatComponent;