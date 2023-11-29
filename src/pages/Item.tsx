import styles from './Item.module.scss';
import {FC, useRef, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch,} from 'react-redux'
import {addToCart} from "../redux/cartSlice";
import AddBtn from "../components/UI/AddBtn";
import {staticData} from "../utils/static-data";
import AmountController from "../components/UI/AmountController";


const Item: FC = () => {
    const {itemId} = useParams();
    const [data] = staticData.filter((item) => item.id === itemId)
    const [index, setIndex] = useState<number>(0);
    const picturesNumber = data.images.length;
    const imageHandler = (change: -1 | 1) => {
        if (change === -1) {
            if (index === 0) {
                return
            }
            setIndex(prevState => prevState + change);
        }
        if (change === 1) {
            if (index === picturesNumber - 1) {
                return
            }
            setIndex(prevState => prevState + change);
        }
    }
    const amountInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const handleDispatch = () => {
        const amount = Number(amountInputRef.current!.value);
        dispatch(addToCart({amount: amount, ...data}));
    }

    return (
        <div className={styles.item}>
            <div className={styles.item__img}>
                <img src={data.images[index]} alt={''}/>
                <div className={styles.tools}>
                    <button className={styles.tools__btn} onClick={() => imageHandler(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                        </svg>
                    </button>
                    <div className={styles.tools__dots}>
                        <div className={styles.circles}>
                            {Array.from({length: picturesNumber}, (v, i) => i).map((i) => {
                                    const classes = (index === i) ?
                                        `${styles.circles__inner} ${styles.circles__active}` :
                                        styles.circles__inner;

                                    return (
                                        <div key={i}
                                             className={classes}
                                             onClick={() => setIndex(i)}
                                        />
                                    )
                                }
                            )}
                        </div>
                    </div>
                    <button className={styles.tools__btn} onClick={() => imageHandler(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path
                                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={styles.item__info}>
                <div className={styles.item__back}>
                    <Link to={`/`}>
                        Back to the list
                    </Link>
                </div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <div>
                    <AmountController defaultValue={1}
                                      ref={amountInputRef}
                    />
                </div>
                <div className={styles.add}>
                    <div className={styles.add__btn}>
                        <AddBtn text={'Add'} onClickDef={handleDispatch}/>
                    </div>
                    <p className={styles.add__price}>
                        {data.price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Item;


// <div className={styles.item}>
//     <div className={styles.item__back}>
//         <Link to={`/`}>
//             Back to the list
//         </Link>
//     </div>
//     <div className={styles.item__img}>
//         <img src={data.images[index]} alt={''}/>
//         <div className={styles.tools}>
//             <button className={styles.tools__btn} onClick={() => imageHandler(-1)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
//                     <path
//                         d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
//                 </svg>
//             </button>
//             <div className={styles.tools__dots}>
//                 <div className={styles.circles}>
//                     {Array.from({length: picturesNumber}, (v, i) => i).map((i) => {
//                             const classes = (index === i) ?
//                                 `${styles.circles__inner} ${styles.circles__active}` :
//                                 styles.circles__inner;
//
//                             return (
//                                 <div key={i}
//                                      className={classes}
//                                      onClick={() => setIndex(i)}
//                                 />
//                             )
//                         }
//                     )}
//                 </div>
//             </div>
//             <button className={styles.tools__btn} onClick={() => imageHandler(1)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
//                     <path
//                         d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
//                 </svg>
//             </button>
//         </div>
//     </div>
//     <div className={styles.item__info}>
//         <h1>{data.name}</h1>
//         <p>{data.description}</p>
//         <div>
//             <AmountController ref={amountInputRef}/>
//         </div>
//         <div className={styles.add}>
//             <div className={styles.add__btn}>
//                 <AddBtn text={'Add'} onClickDef={handleDispatch}/>
//             </div>
//             <p className={styles.add__price}>
//                 {data.price}
//             </p>
//         </div>
//     </div>
// </div>