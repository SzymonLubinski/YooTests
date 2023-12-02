import {FC, useEffect, useState} from "react";
import Cart from "../components/Order/Cart";
import NextBtn from "../components/UI/NextBtn";
import Step from "../components/Order/Step";
import DeliveryAndPayment from "../components/Order/DeliveryAndPayment";
import Summary from "../components/Order/Summary";
import styles from './Order.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {Link} from "react-router-dom";

const defaultSteps = [
    {num: 1, title: 'Cart'},
    {num: 2, title: 'Delivery and payment'},
    {num: 3, title: 'Summary'},
]

const Order: FC = () => {
    const cart = useSelector((state: RootState) => state.cart)
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
        <div className={styles.container}>
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
            {activeStep === 1 && (
                <div className={styles.container__back}>
                    <Link to={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg>
                    </Link>
                </div>
            )}
            <div className={styles.order}>
                {activeStep === 1 && cart.items.length > 0 && (
                    <div className={styles.order__1step}>
                        <Cart/>
                        <div className={styles.order__borderLeft}>
                            <div className={styles.order__sum}>
                                <div className={styles.order__priceInfo}>
                                    <p>Items</p>
                                    <p>{cart.totalPrice}</p>
                                </div>
                                <div className={styles.order__priceInfo}>
                                    <p>Delivery</p>
                                    <p>0</p>
                                </div>
                                <div className={styles.order__priceSum}>
                                    <p>Total with delivery</p>
                                    <p>{cart.totalPrice}</p>
                                </div>
                            </div>
                            <div className={styles.order__btn}>
                                <NextBtn text={'Delivery'} onClickDef={() => nextStepHandle()}/>
                            </div>
                        </div>
                    </div>
                )}
                {activeStep === 2 && cart.items.length > 0 && (
                    <>
                        <DeliveryAndPayment stepHandler={nextStepHandle}/>
                    </>
                )}
                {activeStep === 3 && cart.items.length > 0 && (
                    <>
                        <Summary/>
                    </>
                )}
            </div>
        </div>
    )
}

export default Order;