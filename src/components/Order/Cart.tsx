import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import CartItemComponent from "./CartItemComponent";
import styles from './Cart.module.scss';


const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart);

    return (
        <div className={styles.cart}>
            <ul className={styles.cart__list}>
                {cart.items.map((item) => (
                    <CartItemComponent key={item.id} {...item}/>
                ))}
            </ul>
            <div className={styles.cart__total}>
                total price: <span>{cart.totalPrice.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Cart;