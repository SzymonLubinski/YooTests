import {FC, useRef} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch,} from 'react-redux'
import {addToCart} from "../redux/cartSlice";
import AddBtn from "../components/UI/AddBtn";
import {staticData} from "../utils/static-data";
import AmountController from "../components/UI/AmountController";
import SwiperGallery from "../components/UI/SwiperGallery";
import styles from './Item.module.scss';


const Item: FC = () => {
    const {itemId} = useParams();
    const [data] = staticData.filter((item) => item.id === itemId)
    const amountInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const handleDispatch = () => {
        const amount = Number(amountInputRef.current!.value);
        dispatch(addToCart({amount: amount, ...data}));
    }


    return (
        <div className={styles.item}>
            <div className={styles.item__back}>
                <Link to={`/`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={'#E4E6EB'} height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </Link>
            </div>
            <div className={styles.item__gallery}>
                <SwiperGallery images={data.images}/>
            </div>
            <div className={styles.itemInfo}>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <div>
                    <AmountController defaultValue={1}
                                      ref={amountInputRef}
                    />
                </div>
                <p className={styles.itemInfo__price}>
                    {data.price}
                </p>
                <div className={styles.itemInfo__btn}>
                    <AddBtn text={'ADD TO CART'} onClickDef={handleDispatch}/>
                </div>
            </div>
        </div>
    )
}

export default Item;
