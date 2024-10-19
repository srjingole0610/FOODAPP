import React, { useEffect, useState } from 'react'
import styles from './search.module.css'

function SearchComponent({ foodResult, setFoodResult }) {
    const [query, setQuery] = useState("pizza")
    const URL = "https://api.spoonacular.com/recipes/complexSearch"
    const API_KEY = "47070d583718496ba2a9347a5b86809a"

    useEffect(() => {
        const fetchFood = async () => {
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const parsedResponse = await response.json()
            setFoodResult(parsedResponse.results)
        }
        fetchFood();
    }, [query])

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    return (
        <div className={styles.searchContainer}>
            <input className={styles.searchInput} onChange={handleInputChange} type="text" placeholder='Enter your Reciepe' value={query} />
        </div>
    )
}

export default SearchComponent
