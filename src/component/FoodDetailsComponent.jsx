import React, { useState, useEffect } from 'react'
import styles from './fooddetails.module.css'

function FoodDetailsComponent({ foodID }) {
    const URL = `https://api.spoonacular.com/recipes/${foodID}/information`
    const API_KEY = 'b1b6bd6fae0642bb93dcf4fd947f2ec8'
    const [foodRecipe, setFoodRecipe] = useState({})

    useEffect(() => {
        if (!foodID) return;
        const fetchFoodRecipe = async () => {
            const response = await fetch(`${URL}?apiKey=${API_KEY}`)
            const parsedResponse = await response.json()
            setFoodRecipe(parsedResponse)

        }
        fetchFoodRecipe();
    }, [foodID])
    return (
        <div>
            <h1>Food Details: {foodID}</h1>
            <p>{foodRecipe.title}</p>
            <img src={foodRecipe.image} alt="" />
        </div>
    )
}

export default FoodDetailsComponent
