import React from 'react'
import FoodItemComponent from './FoodItemComponent'

function FoodListComponent({ foodResult, setFoodID }) {
    return (
        <div>
            <ul>
                {foodResult.map((foodItem) => (
                    <FoodItemComponent key={foodItem.id} foodItem={foodItem} setFoodID={setFoodID} />

                ))}
            </ul>
        </div>
    )
}

export default FoodListComponent
