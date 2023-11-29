
import {FC} from "react";
import styles from './AddBtn.module.scss';


interface AddBtnProps{
    text: string;
    onClickDef: () => void;
}


const AddBtn:FC<AddBtnProps> = ({text, onClickDef}) => {

    return (
        <button className={styles.btn} onClick={onClickDef}>
            {text}
        </button>
    )
}

export default AddBtn;