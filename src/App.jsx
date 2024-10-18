import { useState } from "react"
import SearchComponent from "./component/SearchComponent"
import FoodListComponent from "./component/FoodListComponent"

function App() {
  const [foodResult, setFoodResult] = useState([])

  return (
    <div >
      <SearchComponent foodResult={foodResult} setFoodResult={setFoodResult} />
      <FoodListComponent foodResult={foodResult} />
    </div>
  )
}

export default App
