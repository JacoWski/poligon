import React, { useRef } from "react";

import 'pages/User.css';
// import { useInput } from "utilities/hooks";

const User = () => {
    const menRef = useRef();
    const womenRef = useRef();
    const acceptRef = useRef();

    const handleGenderChange = (event) => {
        if (event.target.name === 'men') womenRef.current.checked = false;
        if (event.target.name === 'women') menRef.current.checked = false;
    };
    const handleInvalidSubmit = (event) => {
        const element = document.getElementsByName(event.target.name);
        element[0].style = 'border: 2px solid red';
        event.preventDefault();
    };

    return(
        <div className="user-form-container">
            <form onInvalid ={handleInvalidSubmit}>
                <label htmlFor="name">Imię</label>
                <input type={'text'} name='name' required />
                <label htmlFor="email">E-mail</label>
                <input type={'email'} name='email' required />
                <label htmlFor="bio">Opis</label>
                <textarea name="bio" required></textarea>
                <div className="user-form-group">
                    <label htmlFor="men" className="label-pointer" onClick={() => menRef.current.click()}>Męższczyzna</label>
                    <input ref={menRef} type={'radio'} name='men' required onClick={handleGenderChange} />
                    <label htmlFor="women" className="label-pointer" onClick={() => womenRef.current.click()}>Kobieta</label>
                    <input ref={womenRef} type={'radio'} name='women' required onClick={handleGenderChange} on/>
                </div>
                <div className="user-form-group">
                    <label htmlFor="accept" className="label-pointer" onClick={() => acceptRef.current.click()}>Akceptuje regulamin</label>
                    <input ref={acceptRef} type={'checkbox'} name='accept' required />
                </div>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    );
};

export default User;
