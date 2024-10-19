import React from 'react'
import styles from './ingredients.module.css'
import IngredientsItemComponent from './IngredientsItemComponent'

function IngredientsComponent({ foodRecipe, isLoading }) {
    return (
        <>{isLoading ? (
            <p>Loading</p>
        ) : (
            <div className={styles.ingredientsContainer}>
                {foodRecipe.extendedIngredients.map((item) => (
                    <IngredientsItemComponent item={item} />
                ))}
            </div>
        )}</>
    )
}

export default IngredientsComponent

