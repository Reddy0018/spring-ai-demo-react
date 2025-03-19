import './App.css';
import React, { useState } from 'react';
import ImageGenerator from './Componenets/ImageGenerator';
import RecipeGenerator from './Componenets/RecipeGenerator';
import ChatComponent from './Componenets/chat';

function App() {

  const [activeTab, setActiveTab] = useState('chat');

  const handleTabChange = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <div className="App">
      <select value={activeTab} onChange={handleTabChange} className="dropdown">
        <option value="image-generator">Image Generator</option>
        <option value="chat">Ask AI</option>
        <option value="recipe-generator">Recipe Generator</option>
      </select>

      <div>
        {activeTab === 'image-generator' && <ImageGenerator />}
        {activeTab === 'chat' && <ChatComponent />}
        {activeTab === 'recipe-generator' && <RecipeGenerator />}
      </div>
    </div>
  );
}

export default App;
