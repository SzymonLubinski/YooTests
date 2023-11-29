import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setOff} from "../../redux/portalSlice";
import {resetCart} from "../../redux/cartSlice";
import {Portal} from "../Portal/Portal";
import styles from './CartPreview.module.scss';
import Cart from "./Cart";
import NextBtn from "../UI/NextBtn";
import {FC} from "react";
import {Link} from "react-router-dom";


const CartPreview:FC = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <Portal onClose={() => dispatch(setOff())}>
            <div className={styles.container}>
                {cart.items.length > 0 ? (
                    <div className={styles.container__cart}>
                        <Cart/>
                    </div>
                ) : (
                    <h1>There are no items</h1>
                )}
                <div className={styles.container__buttons}>
                    <NextBtn text={'Close'} onClickDef={() => dispatch(setOff())}/>
                    {cart.items.length > 0 && (
                        <>
                            <NextBtn text={'Reset'} onClickDef={() => dispatch(resetCart())}/>
                            <Link to={'/cart'}>
                                <NextBtn text={'Order'} onClickDef={() => dispatch(setOff())}/>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </Portal>
    )
}

export default CartPreview;