import React from 'react'
import FoodItemComponent from './FoodItemComponent'

function FoodListComponent({ foodResult }) {
    return (
        <div>
            <ul>
                {foodResult.map((foodItem) => (
                    <FoodItemComponent key={foodItem.id} foodItem={foodItem} />

                ))}
            </ul>
        </div>
    )
}

export default FoodListComponent
