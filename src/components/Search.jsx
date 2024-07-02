import { useEffect, useState } from "react"

// const URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "bd2cd4fc1c2f4b1396d794c6d36068af";


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
        <div>
            <input value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text" placeholder="Search for recipes" />
        </div>
    )
}