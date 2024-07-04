import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

function App() {
  const [foodData, setFoodDate] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodDate={setFoodDate} />
      <FoodList foodData={foodData} />

    </div>
  )

}
export default App; 