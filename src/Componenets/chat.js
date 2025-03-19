import React, { useState } from "react";
import './ChatComponent.css'; // Import the new CSS file

function ChatComponent() {

    const [prompt, setPrompt] = useState('');
    const [chatresponse, setChatresponse] = useState('');
    const [loading, setLoading] = useState(false);

    const askAI = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://spring-ai-8th5.onrender.com/GitHubAI/getResponse?prompt=${prompt}`);
            const data = await response.text();
            setChatresponse(data);
        } catch (error) {
            console.error("Error Generating the Chat: " + error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            askAI(); // Trigger the Ask AI button click
        }
    };

    return (
        <div className="chat-container">
            <h2>Talk to AI</h2>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown} // Add the onKeyDown event listener
                placeholder="Enter your prompt"
            />
            <button onClick={askAI}>Ask AI</button>
            <div className="output">
                {loading ? (
                    <div className="spinner"></div>
                ) : (
                    <textarea
                        className="response-textarea"
                        value={chatresponse}
                        readOnly
                    />
                )}
            </div>
        </div>
    );
}

export default ChatComponent;