import React, { useState } from "react";

function ChatComponent() {

    const [prompt, setPrompt] = useState('');
    const  [chatresponse, setChatresponse] = useState('');

    const askAI = async () => {
        try{

            const response = await fetch(`http://localhost:8080/GitHubAI/getResponse?prompt=${prompt}`) //Added Free Endpoint 
            const data = await response.text();
            setChatresponse(data);

        }catch(error){
            console.error("Error Generating the Chat: " +error);
        }
    }

    return (
        <div>
            <h2>Talk to AI</h2>
            <input type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Enter your prompt" />
            <button onClick={askAI}>Ask AI</button>
            <div className="output">
                <p>{chatresponse}</p>
            </div>
        </div>
    );
} 

export default ChatComponent;