import './App.css';
import React, {useState } from 'react';
import ImageGenerator from './Componenets/ImageGenerator';
import RecipeGenerator from './Componenets/RecipeGenerator';
import ChatComponent from './Componenets/chat';

function App() {

  const [activeTab , setActiveTab] = useState('chat');

  const handleTabChange = (tab) => {
    // alert(tab);
    setActiveTab(tab);
  }


  return (
    <div className="App">
      <button className={activeTab==='image-generator' ? 'active':''} onClick={()=>handleTabChange('image-generator')}>Image Generator</button>
      <button className={activeTab==='chat' ? 'active':''} onClick={()=>handleTabChange('chat')}>Ask AI</button>
      <button className={activeTab==='recipe-generator' ? 'active':''} onClick={()=>handleTabChange('recipe-generator')}>Recipe Generator</button>

      <div>
        {activeTab === 'image-generator' && <ImageGenerator/>}
        {activeTab === 'chat' && <ChatComponent/>}
        {activeTab === 'recipe-generator' && <RecipeGenerator/>}
      </div>

    </div>
  );
}

export default App;
