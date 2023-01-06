import React from "react";
import { useForm } from "react-hook-form";

import 'pages/UserReactFormHook.css';

const UserReactFormHook = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
    const onSubmit = (data) => {
        reset();
        console.log(data);
    };
    const ERROR_MSG = 'To pole jest wymagane.';
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="user-form">
                <div>
                    <label htmlFor="name" style={{display: 'block'}}>Imię</label>
                    <input type={'text'}
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? true : false}  />
                    {errors.name && <p>{ERROR_MSG}</p>}
                </div>
                <div>
                    <label htmlFor="email" style={{display: 'block'}}>E-mail</label>
                    <input type={'email'}
                            {...register("email",
                                        { required: true },
                                        { pattern: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
                            )}
                            aria-invalid={errors.name ? true : false}
                    />
                    {errors.email && <p>{ERROR_MSG}</p>}
                </div>
                <div>
                    <label htmlFor="bio" style={{display: 'block'}}>Opis</label>
                    <textarea {...register("bio", { required: true })}
                                aria-invalid={errors.name ? true : false}
                    ></textarea>
                    {errors.bio && <p>{ERROR_MSG}</p>}
                </div>
                <div>
                    <label htmlFor="men">
                        Męższczyzna
                        <input type={'radio'} value="men" {...register("gender", { required: true })} />
                    </label>
                    <label htmlFor="women">
                        Kobieta
                        <input type={'radio'} value="women" {...register("gender", { required: true })} />
                    </label>
                </div>
                {errors.gender && <p>{ERROR_MSG}</p>}
                <div>
                    <label htmlFor="accept">Akceptuje regulamin</label>
                    <input type={'checkbox'} {...register("accept", { required: true })} />
                </div>
                {errors.accept && <p>{ERROR_MSG}</p>}
                <button type="submit">Wyślij</button>
            </form>
            {isSubmitSuccessful && <div name="success-msg">Dziękujemy za wysłanie</div>}
        </div>
    );
};

export default UserReactFormHook;
