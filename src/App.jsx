import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodDate] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodDate={setFoodDate} />
      {foodData.map((food) => <h1>{food.title}</h1>)}
    </div>
  )

}
export default App; 