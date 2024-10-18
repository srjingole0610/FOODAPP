import React, { useEffect, useState } from 'react'

function SearchComponent() {
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchDemo = () => {
            console.log("demo function executed");
        }
        fetchDemo();
    }, [])

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
