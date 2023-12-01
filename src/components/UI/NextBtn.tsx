import {FC} from "react";
import {Link} from "react-router-dom";
import styles from './NextBtn.module.scss';


interface NextBtnProps {
    text: string;
    onClickDef?: () => void;
    link?: string;
    type?: 'submit' | 'button';
}


const NextBtn: FC<NextBtnProps> = ({text, onClickDef, link, type}) => {
    const isDef = onClickDef ? onClickDef : undefined;
    if (link){
        return (
            <div>
                <Link to={link}>
                    <button className={styles.btn}
                            type={type ? type : 'button'}
                            style={{
                                color: "#242526",

                            }}>{text}
                    </button>
                </Link>
            </div>
        )
    }
    return (
        <div>
            <button className={styles.btn}
                    type={type ? type : 'button'}
                    onClick={isDef}
                    style={{
                        color: "#242526",

                    }}>{text}
            </button>
        </div>
    )
}

export default NextBtn;