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
                -
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
                +
            </button>
        </div>
    )
});

export default AmountController;