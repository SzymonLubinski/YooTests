import {FC} from "react";
import styles from './Summary.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";


const Summary:FC = () => {
    const address = useSelector((state: RootState) => state.order);

    return (
        <div className={styles.summary}>
            <h1>Summary</h1>
            <p>{address.firstName}</p>
            <p>{address.lastName}</p>
            <p>{address.streetAddressLine1}</p>
            <p>{address.streetAddressLine2}</p>
            <p>{address.email}</p>
            <p>{address.tel}</p>

            <h1>(Przeście do płatności)</h1>
        </div>
    )
}

export default Summary;