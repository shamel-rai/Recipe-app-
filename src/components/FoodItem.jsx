import styles from './fooditem.module.css';
export default function FoodItem({ food, setFoodId }) {
    // function handleClick() {
    //     console.log("clicked");
    // }
    return (
        <div className={styles.itemContainer}>
            <img className={styles.image} src={food.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.iteName}>{food.title}</p>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.itemBtn}
                    onClick={() => {
                        console.log(food.id)
                        setFoodId(food.id)
                    }}>View Recipe</button>
            </div>
        </div>
    )
}