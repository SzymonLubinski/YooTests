import {FC, useRef} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import AmountController from "../UI/AmountController";
import {CartItem} from "../../types/db";
import {updateCart} from "../../redux/cartSlice";
import {RoundPrice} from "../../utils/functions";
import styles from './CartItemComponent.module.scss';


const CartItemComponent: FC<CartItem> = (item) => {
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
            <div className={styles.item__leftSection}>
                <Link to={`/el/${item.id}`}>
                    <img src={item.images[0]} alt={item.id}/>
                </Link>
            </div>
            <div className={styles.item__rightSection}>
                <section>
                    <Link to={`/el/${item.id}`}>
                        <h1>{item.name}</h1>
                    </Link>
                    <p>
                        <svg onClick={() => removeItem()} xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </p>
                </section>
                <section>
                    <AmountController ref={amountInputRef}
                                          defaultValue={item.amount}
                                          func={displayIt}
                    />
                    <div className={styles.prices}>
                        <p className={styles.prices__total}>{RoundPrice(item.price * item.amount).toFixed(2)}</p>
                        <p>price per item {item.price}</p>
                    </div>
                </section>
            </div>
        </li>
    )
}

export default CartItemComponent;