import {FC} from "react";
import styles from './Step.module.scss';


interface StepProps{
    title: string
    num: number;
    active: boolean;
}

const Step:FC<StepProps> = ({title, num, active}) => {
    const activeStyles = active ? styles.active : '';

    return (
        <div className={`${styles.step} ${activeStyles}`}>
            <div className={styles.step__title}>
                <p>{title}</p>
            </div>
            <div className={styles.step__num}>
                <div className={`${styles.circle} ${activeStyles}`}>{num}</div>
            </div>
        </div>
    )
}

export default Step;