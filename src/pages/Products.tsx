
import {FC} from "react";
import styles from './Products.module.scss'
import stylesCard from '../components/Card.module.scss'
import Card from "../components/Card";
import {Link} from "react-router-dom";
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
                {/*<li className={stylesCard.product}>*/}
                {/*    <Link className={stylesCard.product__link} to={`/new-item`}>*/}
                {/*        <div className={stylesCard.product__images}>*/}
                {/*            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>*/}
                {/*        </div>*/}
                {/*        <div className={stylesCard.product__info}>*/}
                {/*            <div className={stylesCard.product__name}>*/}
                {/*                <h1>Add new item</h1>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </Link>*/}
                {/*</li>*/}
            </ul>
        </div>
    )
}

export default Products;