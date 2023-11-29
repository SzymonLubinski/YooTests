import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import UseFormInput from "../UI/UseFormInput";
import {DeliveryAddress} from "../../types/db";
import {useDispatch} from "react-redux";
import {updateAddress} from "../../redux/orderSlice";
import styles from './DeliveryAndPayment.module.scss';


const DeliveryAndPayment:FC = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit: SubmitHandler<DeliveryAddress> = (data) => {
        dispatch(updateAddress(data))
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h1>Address to delivery</h1>
                <UseFormInput id={'1'}
                              label={'first name'}
                              type={'text'}
                              name={'firstName'}
                              register={register}
                              required
                              errors={errors.firstName}
                              errorMessage={'missing property'}
                />
                <UseFormInput id={'2'}
                              label={'last name'}
                              type={'text'}
                              name={'lastName'}
                              register={register}
                              required
                              errors={errors.lastName}
                              errorMessage={'missing property'}
                />
                <UseFormInput id={'3'}
                              label={'street address line 1'}
                              type={'text'}
                              name={'streetAddressLine1'}
                              register={register}
                              required
                              errors={errors.streetAddressLine1}
                              errorMessage={'missing property'}
                />
                <UseFormInput id={'4'}
                              label={'street address line 2'}
                              type={'text'}
                              name={'streetAddressLine2'}
                              register={register}
                              required
                              errors={errors.streetAddressLine2}
                              errorMessage={'missing property'}
                />
                <UseFormInput id={'5'}
                              label={'email'}
                              type={'email'}
                              name={'email'}
                              register={register}
                              required
                              errors={errors.email}
                              errorMessage={'missing property'}
                />
                <UseFormInput id={'6'}
                              label={'phone number'}
                              type={'tel'}
                              name={'tel'}
                              register={register}
                              required
                              errors={errors.tel}
                              errorMessage={'missing property'}
                />
                <div className={styles.payment}>
                    <h1>Payment</h1>

                </div>
                <div className={styles.form__btnContainer}>
                    <label htmlFor={'sub'}>Send</label>
                    <input id={'sub'} type={'submit'}/>
                </div>
            </form>
        </div>
    )
}

export default DeliveryAndPayment;