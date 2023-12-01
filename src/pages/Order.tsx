import {FC, useEffect, useState} from "react";
import Cart from "../components/Order/Cart";
import NextBtn from "../components/UI/NextBtn";
import Step from "../components/Order/Step";
import DeliveryAndPayment from "../components/Order/DeliveryAndPayment";
import Summary from "../components/Order/Summary";
import styles from './Order.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

const defaultSteps = [
    {num: 1, title: 'Cart'},
    {num: 2, title: 'Delivery and payment'},
    {num: 3, title: 'Summary'},
]

const Order: FC = () => {
    const items = useSelector((state: RootState) => state.cart.items)
    const [activeStep, setActiveStep] = useState(1);
    const nextStepHandle = () => {
        if (activeStep < 3) {
            setActiveStep(activeStep + 1)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeStep]);

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
            <div className={styles.container__next}>
                {activeStep === 1 && (
                    <NextBtn text={'Back to the list'} link={'/'}/>
                )}
            </div>
            <div className={styles.container}>
                <div className={styles.container__order}>
                    {activeStep === 1 && items.length > 0 &&(
                        <>
                            <Cart/>
                            <NextBtn text={'Delivery'} onClickDef={() => nextStepHandle()}/>
                        </>
                    )}
                    {activeStep === 2 && items.length > 0 && (
                        <>
                            <DeliveryAndPayment stepHandler={nextStepHandle}/>
                        </>
                    )}
                    {activeStep === 3 && items.length > 0 && (
                        <>
                            <Summary/>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Order;