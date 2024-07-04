import { useEffect, useState } from "react";
import styles from './foodDetails.module.css';
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "5ee25d52bc084ed597ff0b1114c1e237";
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    }, [foodId])
    return (
        <div className={styles.recipeCard}>
            <div>
                <h1 className={styles.recipeHeading}>{food.title}</h1>
                <img src={food.image} alt="" className={styles.recipeImg} />
                <div className={styles.recipeDetails}>
                    <span>
                        <strong>🕰️{food.readyInMinutes}</strong>
                    </span>
                    <span>
                        <strong>Server:{food.servings}</strong>
                    </span>
                    <span>
                        {food.vegetarian ? "🥕 Vegitarian" : "🥩Not Vegitarian"}
                    </span>
                </div>
                <div>
                    <span>
                        💸{food.pricePerServing / 100} per Serving
                    </span>
                </div>
            </div>

            <h2>Ingredients </h2>
            <ItemList food={food} isLoading={isLoading} />
            <h2>Instruction</h2>
            <div className={styles.recipeInstructions}>
                <ol>
                    {isLoading ? <p>Loading....</p> :
                        food.analyzedInstructions[0].steps.map((step) =>
                            (<li>{step.step}</li>)
                        )}
                </ol>
            </div>
        </div>
    )
}