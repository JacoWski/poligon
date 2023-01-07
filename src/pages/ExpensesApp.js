import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Button } from "components/Form";
import 'pages/ExpensesApp.css';

const outcomeData = [
    { id: 1, expense: "Wydatek", name: "Test wydatek 1", amount: 100, category: "jedzenie" },
    { id: 2, expense: "Wydatek", name: "Test wydatek 2", amount: 100, category: "jedzenie" },
    { id: 3, expense: "Wydatek", name: "Test wydatek 3", amount: 100, category: "jedzenie" },
    { id: 4, expense: "Wydatek", name: "Test wydatek 4", amount: 100, category: "jedzenie" },
    { id: 5, expense: "Wydatek", name: "Test wydatek 5", amount: 100, category: "jedzenie" },
    { id: 6, expense: "Wydatek", name: "Test wydatek 6", amount: 100, category: "jedzenie" },
];

const incomeData = [
    { id: 1, expense: "Przychód", name: "Test przychód 1", amount: 100, category: "jedzenie" },
    { id: 2, expense: "Przychód", name: "Test przychód 2", amount: 100, category: "jedzenie" },
    { id: 3, expense: "Przychód", name: "Test przychód 3", amount: 100, category: "jedzenie" },
    { id: 4, expense: "Przychód", name: "Test przychód 4", amount: 100, category: "jedzenie" },
    { id: 5, expense: "Przychód", name: "Test przychód 5", amount: 100, category: "jedzenie" },
    { id: 6, expense: "Przychód", name: "Test przychód 6", amount: 100, category: "jedzenie" },
];

const ExpensesApp = () => {
    const [income, setIncome] = useState(incomeData);
    const [outcome, setOutcome] = useState(outcomeData);
    const [budget, setBudget] = useState(0);
    const budgetRef = useRef();
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
    };
    const ERROR_MSG = 'To pole jest wymagane.';
    const deleteRecord = (type, index) => {
        if (type === "Wydatek") {
            var tempIncome = outcome.slice();
            tempIncome.splice(index, 1);
            setOutcome(tempIncome);
        }
        if (type === "Przychód") {
            var tempOutcome = income.slice();
            tempOutcome.splice(index, 1);
            setIncome(tempOutcome);
        }
    };
    const calculateBudget = (inc, out) => {
        let tempIncome = 0;
        for (const a of inc) {
            tempIncome += Number(a.amount);
        }
        let tempOutcome = 0;
        for (const a of out) {
            tempOutcome += Number(a.amount);
        }
        setBudget(tempIncome - tempOutcome);
        budgetRef.current.style.color = budget < 0 ? 'red' : 'green';
    };
    const Table = ({data, title}) => (
        <div className='tables'>
                <h3>{title}</h3>
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
                        {data.map((p, i) => (
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
    );
    useEffect(() => {
        calculateBudget(income, outcome);
        localStorage.setItem("outcome", JSON.stringify(outcome));
        localStorage.setItem("income", JSON.stringify(income));
    });

    return(
        <div>
            <h1 ref={budgetRef}>{`Twój budżet wynosi: ${budget}.`}</h1>
            <Table data={outcome} title={'Wydatki'}/>
            <Table data={income} title={'Przychody'}/>

            <h3>Dodaj nowy wpis</h3>
            <form key={'input-form'} onSubmit={handleSubmit(onSubmit)} className="user-form">
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
