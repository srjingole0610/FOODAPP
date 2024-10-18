import { useState } from "react"
import SearchComponent from "./component/SearchComponent"
import FoodListComponent from "./component/FoodListComponent"
import NavbarComponent from "./component/NavbarComponent"
import './App.css'

function App() {
  const [foodResult, setFoodResult] = useState([])

  return (
    <div >
      <NavbarComponent />
      <SearchComponent foodResult={foodResult} setFoodResult={setFoodResult} />
      <FoodListComponent foodResult={foodResult} />
    </div>
  )
}

export default App
