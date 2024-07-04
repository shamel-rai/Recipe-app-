import { useEffect, useState } from "react";
import styles from './search.module.css';
// const URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "5ee25d52bc084ed597ff0b1114c1e237";


export default function Search({ foodData, setFoodDate }) {
    const [query, setQuery] = useState("")
    // Use Effect Hook
    // effect is like call back function , dependency is an array
    // Syntax of the use EFfect
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            setFoodDate(data.results)
        }
        fetchData();
    }, [query])
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text" placeholder="Search for recipes" />
        </div>
    )
}