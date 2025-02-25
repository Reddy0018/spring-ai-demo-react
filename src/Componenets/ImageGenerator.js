import React, { useState } from "react";

function ImageGenerator() {
    const [prompt, setPrompt] = useState('');
    const  [imageUrls, setImageUrls] = useState([]);

    const generateImage = async () => {
        try{

            const response = await fetch(`https://spring-ai-8th5.onrender.com/AI/generateImage?prompt=${prompt}`) //Need to add the API URL
            const data = await response.json();
            setImageUrls(data);

        }catch(error){
            console.error("Error Generating the Image: " +error);
        }
    };
    return (
        <div className="tab-content">   
            <h2>Image Generator</h2>
            <input type="text" placeholder="Enter prompt for Image" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            <button onClick={generateImage}>Generate Image</button>
            <div className="image-grid">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`} />
                ))}
                {[...Array(4-imageUrls.length)].map((_, index) => (
                    <div key={index + imageUrls.length} className="empty-image-slot"></div>
                ))}
            </div>
        </div>
    );
} 

export default ImageGenerator;