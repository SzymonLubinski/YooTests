import React, {useEffect, useState} from "react";
import styles from './AmountController.module.scss';


export interface MyProps{
    defaultValue: number;
    func?: (value: number) => void;
}

const AmountController = React.forwardRef<HTMLInputElement,MyProps>((props, ref) => {
    const [inputValue, setInputValue] = useState<number>(props.defaultValue);
    const changeWithButtonHandler = (change: -1 | 1) => {
        if (change === -1 && inputValue >= 1){
            setInputValue(inputValue + change)
        } else if (change === 1 && inputValue < 999){
            setInputValue(inputValue + change)
        }
    }
    const changeWithInputHandler = (change: number) => {
        if (0 < change && change <= 999) {
            setInputValue(change);
        }
    }

    useEffect(() => {
        if (props.func){
            props.func(inputValue);
        }
    }, [inputValue, props]);

    return (
        <div className={styles.divInput}>
            <button className={styles.divInput__button}
                    onClick={() => changeWithButtonHandler(-1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
            </button>
            <input value={inputValue}
                   ref={ref}
                   type='number'
                   onChange={(e) => changeWithInputHandler(Number(e.target.value))}
                   min='1'
                   max='999'
                   step='1'
            />
            <button className={styles.divInput__button}
                    onClick={() => changeWithButtonHandler(1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </button>
        </div>
    )
});

export default AmountController;