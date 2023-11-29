import {FC, useRef} from "react";
import styles from './CartItemComponent.module.scss';
import AmountController from "../UI/AmountController";
import {CartItem} from "../../types/db";
import {useDispatch} from "react-redux";
import {updateCart} from "../../redux/cartSlice";
import {RoundPrice} from "../../utils/functions";
import {Link} from "react-router-dom";


const CartItemComponent: FC<CartItem> = (item) => {
    const dispatch = useDispatch();
    const amountInputRef = useRef<HTMLInputElement>(null);

    const displayIt = (amount: number) => {
        dispatch(updateCart({id: item.id, amount: amount}));
    }

    return (
        <li className={styles.item}>
            <Link to={`/el/${item.id}`}>
                <section className={styles.item__main}>

                    <img src={item.images[0]} alt={item.id}/>
                    <h1>{item.name}</h1>

                </section>
            </Link>
            <section className={styles.item__amountAndPrice}>
                <AmountController ref={amountInputRef}
                                  defaultValue={item.amount}
                                  func={displayIt}
                />
                <div className={styles.prices}>
                    <p className={styles.prices__total}>
                        {RoundPrice(item.price * item.amount).toFixed(2)}
                    </p>
                    <p className={styles.prices__retail}>
                        price per item {item.price}
                    </p>
                </div>
            </section>
            <section className={styles.item__trash}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
            </section>
        </li>
    )
}

export default CartItemComponent;