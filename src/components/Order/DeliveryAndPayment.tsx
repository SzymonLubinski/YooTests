import {FC} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import UseFormInput from "../UI/UseFormInput";
import {DeliveryAddress} from "../../types/db";
import {useDispatch} from "react-redux";
import {updateAddress} from "../../redux/orderSlice";
import styles from './DeliveryAndPayment.module.scss';
import {OrderStepProps} from "../../types/custom-types";
import NextBtn from "../UI/NextBtn";
import {Link} from "react-router-dom";


const DeliveryAndPayment:FC<OrderStepProps> = ({stepHandler}) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit: SubmitHandler<DeliveryAddress> = (data) => {
        dispatch(updateAddress(data));
        stepHandler();
    }
    const value: DeliveryAddress = watch();

    return (
        <div className={styles.container}>
            <h1>Address to delivery</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.form__inputs}>
                    <UseFormInput id={'1'}
                                  label={'first name'}
                                  type={'text'}
                                  name={'firstName'}
                                  register={register}
                                  required
                                  errors={errors.firstName}
                                  errorMessage={'missing property'}
                                  value={value.firstName}
                    />
                    <UseFormInput id={'2'}
                                  label={'last name'}
                                  type={'text'}
                                  name={'lastName'}
                                  register={register}
                                  required
                                  errors={errors.lastName}
                                  errorMessage={'missing property'}
                                  value={value.lastName}
                    />
                    <UseFormInput id={'3'}
                                  label={'street address line 1'}
                                  type={'text'}
                                  name={'streetAddressLine1'}
                                  register={register}
                                  required
                                  errors={errors.streetAddressLine1}
                                  errorMessage={'missing property'}
                                  value={value.streetAddressLine1}
                    />
                    <UseFormInput id={'4'}
                                  label={'street address line 2'}
                                  type={'text'}
                                  name={'streetAddressLine2'}
                                  register={register}
                                  required
                                  errors={errors.streetAddressLine2}
                                  errorMessage={'missing property'}
                                  value={value.streetAddressLine2}
                    />
                    <UseFormInput id={'5'}
                                  label={'email'}
                                  type={'email'}
                                  name={'email'}
                                  register={register}
                                  required
                                  errors={errors.email}
                                  errorMessage={'missing property'}
                                  value={value.email}
                    />
                    <UseFormInput id={'6'}
                                  label={'phone number'}
                                  type={'tel'}
                                  name={'tel'}
                                  register={register}
                                  required
                                  errors={errors.tel}
                                  errorMessage={'missing property'}
                                  value={value.tel}
                    />
                    <div className={styles.payment}>
                        <h1>Payment</h1>
                    </div>
                </div>
                <div className={styles.form__submit}>
                    <div className={styles.form__terms}>
                        <div>
                            <input type={'checkbox'}/>
                            <label>
                                <Link to={'/'} target={'_blank'}>
                                    User Privacy Notice
                                </Link>
                            </label>
                        </div>
                        <div>
                            <input type={'checkbox'}/>
                            <label>
                                <Link to={'/'} target={'_blank'}>
                                    Terms
                                </Link>
                            </label>
                        </div>
                    </div>
                    <div className={styles.form__btn}>
                        <NextBtn text={'Summary'} type={'submit'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DeliveryAndPayment;