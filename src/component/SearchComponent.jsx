import React, { useEffect, useState } from 'react'

function SearchComponent() {
    const [query, setQuery] = useState("pizza")
    const URL = "https://api.spoonacular.com/recipes/complexSearch"
    const API_KEY = "b1b6bd6fae0642bb93dcf4fd947f2ec8"

    useEffect(() => {
        const fetchFood = async () => {
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const parsedResponse = await response.json()
        }
        fetchFood();
    }, [query])

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    return (
        <div>
            <input onChange={handleInputChange} type="text" placeholder='Enter your Reciepe' value={query} />
        </div>
    )
}

export default SearchComponent
