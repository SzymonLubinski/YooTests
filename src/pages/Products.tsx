
import {FC} from "react";
import styles from './Products.module.scss'
import Card from "../components/Card";
import {staticData} from "../utils/static-data";


const Products: FC = () => {

    return (
        <div className={styles.container}>
            <ul className={styles.productList}>
                {staticData.map((product) => (
                    <Card key={product.id}
                          itemId={product.id}
                          name={product.name}
                          images={product.images}
                          price={product.price}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Products;