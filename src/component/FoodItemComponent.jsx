import React from 'react'
import styles from './foodItem.module.css'

function FoodItemComponent({ foodItem, setFoodID }) {
    const setFoodIDs = () => {
        setFoodID(foodItem.id)
    }
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={foodItem.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName} key={foodItem.id}>{foodItem.title}</p>
            </div>
            <div className={styles.buttonContainer}>

                <button onClick={setFoodIDs} className={styles.itemButton}>View Recipe</button>
            </div>
        </div>
    )
}

export default FoodItemComponent
