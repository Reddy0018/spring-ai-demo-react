import React, { useState } from "react";
import './RecipeGenerator.css'; // Import the CSS file for styling

function RecipeGenerator() {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryRestictions, setDietaryRestictions] = useState('No dietary Restrictions');
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(false);

    const createRecipe = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/AI/getRecipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestictions}`);
            const data = await response.text();
            setRecipe(data);
        } catch (error) {
            console.error("Error Generating the Recipe: " + error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Recipe Generator</h2>
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Enter Ingredients (Comma-Separated)" />
            <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder="Enter Cuisine Type" />
            <input type="text" value={dietaryRestictions} onChange={(e) => setDietaryRestictions(e.target.value)} placeholder="Enter Dietary Restrictions" />

            <button onClick={createRecipe}>Generate Recipe</button>
            <div className="output">
                {loading ? <div className="spinner"></div> : <pre className="recipe-text">{recipe}</pre>}
            </div>
        </div>
    );
}

export default RecipeGenerator;