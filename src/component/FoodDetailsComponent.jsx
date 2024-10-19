import React, { useState, useEffect } from 'react'
import styles from './fooddetails.module.css'

function FoodDetailsComponent({ foodID }) {
    const URL = `https://api.spoonacular.com/recipes/${foodID}/information`
    const API_KEY = '47070d583718496ba2a9347a5b86809a'
    const [foodRecipe, setFoodRecipe] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!foodID) return;
        const fetchFoodRecipe = async () => {
            const response = await fetch(`${URL}?apiKey=${API_KEY}`)
            const parsedResponse = await response.json()
            setFoodRecipe(parsedResponse)
            console.log(parsedResponse)
            setLoading(false)

        }
        fetchFoodRecipe();
    }, [foodID])
    return (
        <>
            {foodID ? (
                <div className={styles.container}>
                    <h1 className={styles.title}>Food Details: {foodID}</h1>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={foodRecipe.image} alt="" />
                    </div>
                    <div className={styles.infoContainer}>
                        <h2 className={styles.heading}>{foodRecipe.title}</h2>
                        <div className={styles.prepTime}>
                            <span><strong>🕛Prep Time:</strong> {foodRecipe.readyInMinutes} Minutes</span>
                        </div>
                        <div className={styles.serves}>
                            <span><strong>👨‍👩‍👧‍👦Serves For:</strong> {foodRecipe.servings}</span>
                        </div>
                        <div className={styles.diet}>
                            <span>{foodRecipe.vegetarian ? "🥕Vegetarian " : "🍖Non-Vegetarian"}</span>
                            <span>{foodRecipe.vegan ? "Vegan " : ""}</span>
                        </div>
                        <div className={styles.price}>
                            <span>${(Math.round(foodRecipe.pricePerServing) / 100).toFixed(2)} Per Serving</span>
                        </div>
                    </div>
                    <div className={styles.instructions}>
                        <h2 className={styles.heading}>Instructions:</h2>
                        {isLoading ? ("Instructions are getting loaded") : (foodRecipe.analyzedInstructions[0].steps.map((step) => (<li className={styles.step} key={step.number}>{step.step}</li>)))}
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default FoodDetailsComponent

