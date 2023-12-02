import {useForm, SubmitHandler} from "react-hook-form";
import UseFormInput from "../components/UI/UseFormInput";
import NextBtn from "../components/UI/NextBtn";
import styles from './AddForm.module.scss';


type IFormInput = {
    name: string;
    price: number;
    description: string;
    images: Blob[];
}

const AddForm = () => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm<IFormInput>();
    const watchImages = watch('images');
    const value: IFormInput = watch();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <UseFormInput id={'1'}
                          label={'product name'}
                          type={'text'}
                          name={'name'}
                          register={register}
                          required
                          errors={errors.name}
                          errorMessage={'missing property'}
                          value={value.name}
            />
            <UseFormInput id={'2'}
                          label={'product price'}
                          type={'number'}
                          name={'price'}
                          register={register}
                          required
                          errors={errors.price}
                          errorMessage={'missing property'}
                          value={value.price}
            />

            <UseFormInput id={'3'}
                          label={'product description'}
                          type={'text'}
                          name={'description'}
                          register={register}
                          required
                          errors={errors.description}
                          errorMessage={'missing property'}
                          value={value.description}
            />
            <div className={styles.rowContainer}>
                <section className={styles.rowContainer__left}>
                    <label>images</label>
                </section>
                <section className={styles.rowContainer__rightUpload}>
                    <div className={styles.rowContainer__allRight}>
                        <input id={'images'}
                               type={'file'}
                               multiple
                               {...register('images', {
                                   required: true,
                               })}
                        />
                        <div className={styles.upload}>
                            <label htmlFor={'images'} className={styles.upload__btn}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path
                                        d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
                                </svg>
                            </label>
                            <div className={styles.upload__list}>
                                {watchImages && Array.from(watchImages).map((file, i) => {
                                    const url = URL.createObjectURL(file);
                                    return (
                                        <img key={i} src={url} alt={`url: ${url}`}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.error}>
                            {errors.images?.type === 'required' && (
                                <p className={styles.error__text}>missing pictures</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <button className={styles.form__btn} type={'submit'}>
                <NextBtn text={'add item'}/>
            </button>
        </form>
    )
}

export default AddForm;