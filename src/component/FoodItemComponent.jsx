import React from 'react'

function FoodItemComponent({ foodItem, index }) {
    return (
        <div>
            <img src={foodItem.image} alt="" />
            <h1 key={foodItem.id}>{foodItem.title}</h1>
            <button>View Recipe</button>
        </div>
    )
}

export default FoodItemComponent
