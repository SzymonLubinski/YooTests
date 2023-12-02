import {FC, useRef} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import AmountController from "../../UI/AmountController";
import {CartItem} from "../../../types/db";
import {updateCart} from "../../../redux/cartSlice";
import {RoundPrice} from "../../../utils/functions";
import styles from './CartItemII.module.scss';


const CartItemII: FC<CartItem> = (item) => {
    const dispatch = useDispatch();
    const amountInputRef = useRef<HTMLInputElement>(null);

    const displayIt = (amount: number) => {
        dispatch(updateCart({id: item.id, amount: amount}));
    }
    const removeItem = () => {
        dispatch(updateCart({id: item.id, amount: 0}));
    }


    return (
        <li className={styles.item}>
            <section className={styles.item__imgSection}>
                <Link to={`/el/${item.id}`}>
                    <img src={item.images[0]} alt={item.id}/>
                </Link>
            </section>
            <section className={styles.item__titleSection}>
                <Link to={`/el/${item.id}`}>
                    <h1>{item.name}</h1>
                </Link>
            </section>
            <section className={styles.item__inputSection}>
                <AmountController ref={amountInputRef}
                                  defaultValue={item.amount}
                                  func={displayIt}
                />
            </section>
            <section className={styles.item__priceSection}>
                <p>{RoundPrice(item.price * item.amount).toFixed(2)} zł</p>
            </section>
            <section className={styles.item__trashSection}>
                <p>
                    <svg onClick={() => removeItem()} xmlns="http://www.w3.org/2000/svg" height="16" width="12"
                         viewBox="0 0 384 512">
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </p>
            </section>
        </li>
    )
}

export default CartItemII;