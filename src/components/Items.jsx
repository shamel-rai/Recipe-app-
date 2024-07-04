import styles from './items.module.css'; 
export default function Items({ items }) {
    return (
        <div>
            <div className={styles.itemContainer}>
                <div className={styles.imgContainer}>
                    <img src={`https://spoonacular.com/cdn/ingredients_100x100/${items.image}`} alt="" />
                </div>
                <div className={styles.nameContainer}>
                    <div className={styles.name}>
                        {items.name}
                    </div>
                    <div className={styles.amount}>
                        {items.amount} {items.unit}
                    </div>
                </div>

            </div>
        </div>
    )
}