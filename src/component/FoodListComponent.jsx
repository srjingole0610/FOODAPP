import React from 'react'

function FoodListComponent({ foodResult }) {
    return (
        <div>
            <ul>
                {foodResult.map((foodItem, index) => (
                    <h1 key={index}>{foodItem.title}</h1>
                ))}
            </ul>
        </div>
    )
}

export default FoodListComponent
