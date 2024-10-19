import React from 'react'
import styles from './fooddetails.module.css'

function FoodDetailsComponent({ foodID }) {
    return (
        <div>
            <h1>Food Details: {foodID}</h1>
        </div>
    )
}

export default FoodDetailsComponent
