import styles from './UseFormInput.module.scss';
import {FC, useRef, useState} from "react";


interface UseFormInputProps{
    id: string;
    label: string;
    type: string;
    name: string;
    register: any;
    required: boolean;
    errors: any;
    errorMessage: string;
}

const UseFormInput:FC<UseFormInputProps> = (
    {label, type, name, register, required, errors, errorMessage}
) => {
    const [value, setValue] = useState<string>('')
    const [isActive, setIsActive] = useState<boolean>(false)
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [wasVibrated, setWasVibrated] = useState(false);
    const isVibrationSupported = 'vibrate' in navigator;

    let fieldClassName = styles.field;

    if (isActive || value) {
        fieldClassName += ` ${styles.active}`;
    }

    if (errors) {
        fieldClassName += ` ${styles.error}`;
        if (!wasVibrated) {
            if (isVibrationSupported) {
                navigator.vibrate(200);
            }
            setWasVibrated(true);
        }
    }

    const focusedStyles = isFocused ? '' : styles.opacity;
    const labelStyles = errors ? `${styles.error} ${focusedStyles}` : focusedStyles;

    return (
        <div className={fieldClassName}>
            <input type={type}
                   {...register(name, {required})}
            />
            <label className={labelStyles}>
                {required ? "*" : ""}{label}{errors ? " - " + errorMessage : ""}
            </label>
        </div>
    )
}

export default UseFormInput;