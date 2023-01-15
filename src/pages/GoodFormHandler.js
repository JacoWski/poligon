import React, { useState } from "react";

import styles from 'pages/GoodFormHandler.module.css';

const GoodFromHandler = () => {
    const [state, setState] = useState({});
    const handler = (event) =>  {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://example.com', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: { 'Content-type': 'application/json' },
            // Gdybym miał zainstalowanego Axios'a to by wyglądało tak (bez serializacji):
            // axios.post('https://example.com', state);
        });
    };
    const { name, surname, email } = state;
    return(
        <form className={styles.formBody} onSubmit={handleSubmit} >
            <p>{name} {surname} {email}</p>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type={'text'} onChange={handler} />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input id="surname" name="surname" type={'text'} onChange={handler} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type={'text'} onChange={handler} />
            </div>
            <div>
                <input id="email" name="email" type={'submit'} value={'Submit'} className={styles.btnSubmit} />
            </div>
        </form>
    );
};

export default GoodFromHandler;
