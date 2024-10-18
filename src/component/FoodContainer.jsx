import React from 'react'
import styles from './foodContainer.module.css'
function FoodContainer({ children }) {
    return (
        <div className={styles.foodContainer}>
            {children}
        </div>
    )
}

export default FoodContainer
