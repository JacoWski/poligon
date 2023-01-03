import React, { useRef } from "react";

import 'pages/User.css';

const User = () => {
    const menRef = useRef();
    const womenRef = useRef();
    const acceptRef = useRef();

    const handleChange = (event) => {
        document.getElementsByName(event.target.name)[0].removeAttribute('style');
        document.getElementById(event.target.name).remove();
    };
    const handleGenderChange = (event) => {
        if (event.target.value === 'men') womenRef.current.checked = false;
        if (event.target.value === 'women') menRef.current.checked = false;
    };
    const handleInvalidSubmit = (event) => {
        document.getElementsByName(event.target.name)[0].style.border = '2px solid red';
        document.getElementById(event.target.name).append('To pole jest wymagane.');
        event.preventDefault();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('idzie dlaej');
        document.getElementsByName('success-msg')[0].style.visibility = 'visible';
        document.getElementById('user-form').reset();
    };

    return(
        <div className="user-form-container">
            <form id="user-form" onInvalid ={handleInvalidSubmit} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Imię</label>
                    <input type={'text'} name='name' required onChange={handleChange}/>
                </div>
                <span id='name' className="warning"></span>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type={'email'} name='email' required onChange={handleChange}/>
                </div>
                <span id='email' className="warning"></span>
                <div>
                    <label htmlFor="bio">Opis</label>
                    <textarea name="bio" required onChange={handleChange}></textarea>
                </div>
                <span id="bio" className="warning"></span>
                <div className="user-form-group">
                    <label htmlFor="men" className="label-pointer" onClick={() => menRef.current.click()}>Męższczyzna</label>
                    <input ref={menRef} type={'radio'} value='men' name="gender" required onClick={handleGenderChange} onChange={handleChange} />
                    <label htmlFor="women" className="label-pointer" onClick={() => womenRef.current.click()}>Kobieta</label>
                    <input ref={womenRef} type={'radio'} value='women' name="gender" onClick={handleGenderChange} onChange={handleChange} />
                </div>
                <span id='gender' className="warning"></span>
                <div className="user-form-group">
                    <label htmlFor="accept" className="label-pointer" onClick={() => acceptRef.current.click()}>Akceptuje regulamin</label>
                    <input ref={acceptRef} type={'checkbox'} name='accept' required onChange={handleChange} />
                </div>
                <span id='accept' className="warning"></span>
                <button type="submit">Wyślij</button>
            </form>
            <p name="success-msg" style={{visibility: 'hidden'}}>Dziękujemy za wysłanie</p>
        </div>
    );
};

export default User;
