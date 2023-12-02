import styles from './UseFormInput.module.scss';
import {FC, useEffect, useState} from "react";


interface UseFormInputProps{
    id: string;
    label: string;
    type: string;
    name: string;
    register: any;
    required: boolean;
    errors: any;
    errorMessage: string;
    value: number| string | undefined;
}

const UseFormInput:FC<UseFormInputProps> = (
    {label, type, name, register, required, errors, errorMessage, value}
) => {
    const [wasVibrated, setWasVibrated] = useState(false);
    const [showLabel, setShowLabel] = useState(true);

    useEffect(() => {
        if (!value){
            setShowLabel(true);
        }
        if (typeof value === 'string' && value.length === 0){
            setShowLabel(true);
        }
        if (typeof value === 'string' && value.length > 0){
            setShowLabel(false);
        }
        if (typeof value === 'number'){
            setShowLabel(false);
        }

    }, [value]);

    const isVibrationSupported = 'vibrate' in navigator;
    let fieldClassName = `${styles.field} ${styles.active}`;
    if (errors) {
        fieldClassName += ` ${styles.error}`;
        if (!wasVibrated) {
            if (isVibrationSupported) {
                navigator.vibrate(200);
            }
            setWasVibrated(true);
        }
    }

    return (
        <div className={fieldClassName}>
            <input type={type}
                   {...register(name, {required})}
            />
            {showLabel && (
                <label className={styles.lab}>
                    {required ? "*" : ""}{label}{errors ? " - " + errorMessage : ""}
                </label>
            )}
        </div>
    )
}

export default UseFormInput;