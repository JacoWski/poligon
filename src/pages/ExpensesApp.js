import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Button } from "components/Form";
// import Table from 'components/Table';
// import expensesData from 'DataFactory/expenses';
import 'pages/ExpensesApp.css';

const ExpensesApp = () => {
    const [income, setIncome] = useState([]);
    const [outcome, setOutcome] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data.expense === 'Wydatek') {
            outcome.push(data);
            setOutcome(outcome);
        }
        if (data.expense === 'Przychód') {
            income.push(data);
            setIncome(income);
        }
        console.log(data);
    };
    const ERROR_MSG = 'To pole jest wymagane.';
    const deleteRecord = (type, index) => {
        if (type === "Wydatek") {
            outcome.splice(index);
            setOutcome(outcome);
        }
        if (type === "Przychód") {
            income.splice(index);
            setIncome(income);
        }
        console.log(income);
        console.log(outcome);
    };

    return(
        <div>
            <div className='tables'>
                <h3>Wydatki</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Nazwa</th>
                            <th>Kwota</th>
                            <th>Kategoria</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        {outcome.map((p, i) => (
                            <tr key={`expense-${i}`}>
                                <td>{i + 1}</td>
                                <td>{p.name}</td>
                                <td>{p.amount}</td>
                                <td>{p.category}</td>
                                <td><Button icon={faTrashCan} handler={() => deleteRecord(p.expense, i)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='tables'>
                <h3>Przychody</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Nazwa</th>
                            <th>Kwota</th>
                            <th>Kategoria</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        {income.map((p, i) => (
                            <tr key={`income-${i}`}>
                                <td>{i + 1}</td>
                                <td>{p.name}</td>
                                <td>{p.amount}</td>
                                <td>{p.category}</td>
                                <td><Button icon={faTrashCan} handler={() => deleteRecord(p.expense, i)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h3>Dodaj nowy wpis</h3>
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
                    <select name="category" {...register("category")}>
                        <option>Jedzenie</option>
                        <option>Paliwo</option>
                        <option>Inne</option>
                    </select>
                </div>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default ExpensesApp;
