import React, { useState, useEffect } from 'react'
import styles from './fooddetails.module.css'

function FoodDetailsComponent({ foodID }) {
    const URL = `https://api.spoonacular.com/recipes/${foodID}/information`
    const API_KEY = 'b1b6bd6fae0642bb93dcf4fd947f2ec8'
    const [foodRecipe, setFoodRecipe] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!foodID) return;
        const fetchFoodRecipe = async () => {
            const response = await fetch(`${URL}?apiKey=${API_KEY}`)
            const parsedResponse = await response.json()
            setFoodRecipe(parsedResponse)
            console.log(parsedResponse)
            isLoading(false)

        }
        fetchFoodRecipe();
    }, [foodID])
    return (
        <>
            {foodID ? (
                <div>
                    <h1>{foodID ? `Food Details: ${foodID}` : ''}</h1>
                    <div>
                        <h1>{foodRecipe.title}</h1>
                        <img src={foodRecipe.image} alt="" />
                    </div>
                    <div>
                        <span><strong>🕛Prep Time:{foodRecipe.readyInMinutes} Minutes</strong></span>
                        <span><strong>👨‍👩‍👧‍👦Serves For:{foodRecipe.servings}</strong></span>
                        <span>{foodRecipe.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</span>
                        <span>{foodRecipe.vegan ? "Vegan " : ""}</span>

                    </div>
                    <div>
                        <span>${(Math.round(foodRecipe.pricePerServing) / 100).toFixed(2)} Per Serving</span>
                    </div>
                    <div>
                        <h2>Instructions:</h2>
                        {isLoading ? ("Instructions are getting loaded") : (foodRecipe.analyzedInstructions[0].steps.map((step) => (<li key={step.number}>{step.step}</li>)))}

                    </div>
                </div>
            ) : null}
        </>
    )
}

export default FoodDetailsComponent
