import React, {useState} from "react";

function RecipeGenerator() {
    const[ingredients, setIngredients] = useState('');
    const[cuisine, setCuisine] = useState('any');
    const[dietaryRestictions, setDietaryRestictions] = useState('No dietary Restrictions');
    const[recipe, setRecipe] = useState('');

    const  createRecipe = async () => {
        try{
            const response = await fetch(`http://localhost:8080/AI/getRecipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestictions}`) //Need to add the API URL
            const data = await response.text();
            // console.log(data);
            setRecipe(data);
        }catch(error){
            console.error("Error Generating the Recipe: " +error);
        }
    };

    return (
        <div>
            <h2>Recipe Generator</h2>
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Enter Ingredients(Comma-Seperated)" />
            <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} placeholder="Enter Cuisine Type" />
            <input type="text" value={dietaryRestictions} onChange={(e) => setDietaryRestictions(e.target.value)} placeholder="Enter Dietary Restrictions" />

            <button onClick={createRecipe}>Generate Recipe</button>
            <div className="output">
                <pre className="recipe-text">{recipe}</pre>
            </div>
        </div>
    );
} 

export default RecipeGenerator;