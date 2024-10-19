import { useState } from "react";
import SearchComponent from "./component/SearchComponent";
import NavbarComponent from "./component/NavbarComponent";
import "./App.css";
import FoodContainer from "./component/FoodContainer";
import FoodListComponent from "./component/FoodListComponent";
import InnerComponent from "./component/InnerComponent";
import FoodDetailsComponent from "./component/FoodDetailsComponent";

function App() {
  const [foodResult, setFoodResult] = useState([]);
  const [foodID, setFoodID] = useState(0);

  return (
    <div>
      <NavbarComponent />
      <SearchComponent foodResult={foodResult} setFoodResult={setFoodResult} />
      <FoodContainer>
        <InnerComponent>
          <FoodListComponent foodResult={foodResult} setFoodID={setFoodID} />
        </InnerComponent>
        <InnerComponent>
          <FoodDetailsComponent foodID={foodID} />
        </InnerComponent>
      </FoodContainer>
    </div>
  );
}

export default App;
