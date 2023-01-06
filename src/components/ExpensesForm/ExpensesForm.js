import React from "react";
import { useForm } from "react-hook-form";

import 'pages/UserReactFormHook.css';

const ExpensesForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        reset();
        console.log(data);
    };
    const ERROR_MSG = 'To pole jest wymagane.';
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="user-form">
            <div>
                <label htmlFor="expense">Wydatek </label>
                <input type={'radio'} value="Wydatek" name='expense' {...register("expense", { required: true })}/>
                <label htmlFor="expense">Przychód </label>
                <input type={'radio'} value="Przychód" name='expense' {...register("expense", { required: true })}/>
            </div>
            {errors.expense && <p>{ERROR_MSG}</p>}
            <div>
                <label htmlFor="name">Nazwa</label>
                <input type={'text'} name="name" {...register("name", { required: true })}/>
            </div>
            {errors.name && <p>{ERROR_MSG}</p>}
            <div>
                <label htmlFor="amount">Kwota</label>
                <input type={'number'} name="amount" {...register("amount", { required: true })}/>
            </div>
            {errors.amount && <p>{ERROR_MSG}</p>}
            <div>
                <select name="category">
                    <option>Jedzenie</option>
                    <option>Paliwo</option>
                    <option>Inne</option>
                </select>
            </div>
            <button type="submit">Dodaj</button>
        </form>
    );
};

export default ExpensesForm;
