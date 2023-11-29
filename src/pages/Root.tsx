import {FC, useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import type {RootState} from "../redux/store";
import {useDispatch, useSelector} from 'react-redux'
import {setOn} from "../redux/portalSlice";
import styles from './Root.module.scss';
import CartPreview from "../components/Order/CartPreview";


interface ShopRootProps{
    shopLogo: string;
}

const Root: FC<ShopRootProps> = ({shopLogo}) => {
    const navigate = useNavigate();
    const cart = useSelector((state: RootState) => state.cart)
    const active = useSelector((state: RootState) => state.portal.active)
    const dispatch = useDispatch();
    const [firstRender, setFirstRender] = useState<boolean>(true);
    const [animation, setAnimation] = useState<boolean>(false);
    useEffect(() => {
        if (firstRender){
            setFirstRender(false);
            return ;
        }
        setAnimation(true);
        const timer = setTimeout(() => {
            setAnimation(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [cart, firstRender])
    const cartStyles = `${styles.cart} ${animation ? styles.cart__hi : ''}`

    const showCartHandler = () => {
        if (window.innerWidth > 600){
            dispatch(setOn());
        } else {
            return navigate('/cart');
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <header className={styles.header}>
                    <div className={styles.header__item}>
                        {shopLogo !== 'hidden' && (
                            <img src={shopLogo} alt={''}/>
                        )}
                    </div>
                    <div className={styles.header__item}>
                        <div className={cartStyles} onClick={() => showCartHandler()}>
                            <p className={styles.cart__amount}>
                                {cart.totalAmount}
                            </p>
                            <div className={styles.cart__cart}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={styles.center__profile}>
                    <Outlet />
                </div>
            </div>
            {active && <CartPreview/>}
        </div>
    );
}

export default Root;