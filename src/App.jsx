import { useState } from "react"
import SearchComponent from "./component/SearchComponent"
import NavbarComponent from "./component/NavbarComponent"
import './App.css'
import FoodContainer from "./component/FoodContainer"
import FoodListComponent from "./component/FoodListComponent"

function App() {
  const [foodResult, setFoodResult] = useState([])

  return (
    <div >
      <NavbarComponent />
      <SearchComponent foodResult={foodResult} setFoodResult={setFoodResult} />
      <FoodContainer>
        <FoodListComponent foodResult={foodResult} />
      </FoodContainer>
    </div>
  )
}

export default App
