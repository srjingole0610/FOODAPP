import { useState } from "react";
import SearchComponent from "./component/SearchComponent";
import NavbarComponent from "./component/NavbarComponent";
import "./App.css";
import FoodContainer from "./component/FoodContainer";
import FoodListComponent from "./component/FoodListComponent";
import InnerComponent from "./component/InnerComponent";

function App() {
  const [foodResult, setFoodResult] = useState([]);

  return (
    <div>
      <NavbarComponent />
      <SearchComponent foodResult={foodResult} setFoodResult={setFoodResult} />
      <FoodContainer>
        <InnerComponent>
          <FoodListComponent foodResult={foodResult} />
        </InnerComponent>
      </FoodContainer>
    </div>
  );
}

export default App;
