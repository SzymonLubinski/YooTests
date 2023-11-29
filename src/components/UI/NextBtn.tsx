import {FC} from "react";
import styles from './NextBtn.module.scss';
import {Link} from "react-router-dom";


interface NextBtnProps {
    text: string;
    onClickDef?: () => void;
    link?: string;
}


const NextBtn: FC<NextBtnProps> = ({text, onClickDef, link}) => {
    if (onClickDef) {
        return (
            <div>
                <button className={styles.btn}
                        onClick={onClickDef}
                        style={{
                            color: "#cdffd8",

                        }}>{text}
                </button>
            </div>
        )
    }

    return (
        <div>
            <Link to={`/${link}`}>
                <button className={styles.btn}
                        style={{
                            color: "#cdffd8",

                        }}>{text}
                </button>
            </Link>
        </div>
    )
}

export default NextBtn;