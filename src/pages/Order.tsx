import styles from './Order.module.scss';
import Cart from "../components/Order/Cart";
import NextBtn from "../components/UI/NextBtn";
import {FC, useState} from "react";
import Step from "../components/Order/Step";
import DeliveryAndPayment from "../components/Order/DeliveryAndPayment";
import Summary from "../components/Order/Summary";

const defaultSteps = [
    {num: 1, title: 'Cart'},
    {num: 2, title: 'Delivery and payment'},
    {num: 3, title: 'Summary'},
]

const Order: FC = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [btnContent, setBtnContent] = useState<string>(defaultSteps[1].title)
    const nextStepHandle = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1)
            if (activeStep < 2) {
                setBtnContent(defaultSteps[activeStep + 1].title)
            }
        }
    }

    return (
        <div className={styles.center}>
            <div className={styles.nav}>
                {defaultSteps.map((step) => {
                    const active = step.num <= activeStep;
                    return (
                        <Step key={step.num}
                              num={step.num}
                              active={active}
                              title={step.title}
                        />
                    )
                })}
            </div>
            <div className={styles.container}>
                <div className={styles.container__order}>
                    {activeStep === 1 && (
                        <>
                            <Cart/>
                        </>
                    )}
                    {activeStep === 2 && (
                        <>
                            <DeliveryAndPayment/>
                        </>
                    )}
                    {activeStep === 3 && (
                        <>
                            <Summary/>
                        </>
                    )}
                </div>
                <div className={styles.container__next}>
                    {activeStep === 1 && (
                        <NextBtn text={'Back to the list'} link={''}/>
                    )}
                    {activeStep !== 3 && (
                        <NextBtn text={btnContent} onClickDef={() => nextStepHandle()}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Order;