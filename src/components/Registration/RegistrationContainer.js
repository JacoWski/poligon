import React, { useRef } from "react";

const RegistrationContainer = () => {
    const formRef = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const elements = event.target.elements;
        // console.log(event);
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();
        console.log(event);
    };
    return(
        <form ref={formRef} onSubmit={handleSubmit} onInvalid={handleSubmit2} >
            <div>
                <label htmlFor="email" >Email</label>
                <input type={'email'} id="email" name="email" />
            </div>
            <div>
                <label htmlFor="pass" >Password</label>
                <input type={'password'} id="pass" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$" minLength={8} />
            </div>
            <div>
                <label htmlFor="confirmPass" >Confirm password</label>
                <input type={'password'} id="confirmPass" name="confirmPass" />
            </div>
            <input type={'submit'} value={'Register'} />
        </form>
    );
};

export default RegistrationContainer;
