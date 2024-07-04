import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import './App.css';
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetails";

function App() {
  const [foodData, setFoodDate] = useState([]);
  const [foodId, setFoodId] = useState("664147");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodDate={setFoodDate} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>

    </div>
  )

}
export default App; 