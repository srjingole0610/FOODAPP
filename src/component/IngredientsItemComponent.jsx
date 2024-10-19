import React from 'react'
import styles from './ingredientsitem.module.css'
function IngredientsItemComponent({ item }) {
    return (
        <div className={styles.ingredientItem} key={item.id}>
            <img className={styles.ingredientImage} src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt={item.name} />
            <h3 className={styles.ingredientName}>{item.name}</h3>
            <h3 className={styles.ingredientAmount}>{item.amount} {item.unit}</h3>
        </div>
    )
}

export default IngredientsItemComponent
