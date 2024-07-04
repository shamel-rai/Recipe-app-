import Items from "./Items";

export default function ItemList({ food, isLoading }) {
    return (
        <div>
            {isLoading ? <p>Loading...</p> : food.extendedIngredients.map((items) => (
                <Items items ={items}/>
            ))}

        </div>
    )
}