import { useState } from "react"
import SearchComponent from "./component/SearchComponent"

function App() {
  const [foodResult, setFoodResult] = useState([])

  return (
    <div >
      <SearchComponent foodResult={foodResult} setFoodResult={setFoodResult} />
      <ul>
        {foodResult.map((foodItem, index) => <h1 key={index}>{foodItem.title}</h1>)}
      </ul>
    </div>
  )
}

export default App
