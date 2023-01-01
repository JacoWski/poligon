import React, { useRef } from "react";

import { useInput } from "utilities/hooks";

const Form = () => {
    const [name, handleNameChange] = useInput('');
    const [surname, handleSurnameChange] = useInput('');
    const [age, handleAgeChange] = useInput('');
    console.log(name, surname, age);
    const handleSubmit = (event) => event.preventDefault();
    const surnameInput = useRef();
    const handleChangeFocus = () => {
        surnameInput.current.focus();
        surnameInput.current.value = 'Jacowski';
        surnameInput.current.style.border = 'red 2px solid';
    };
    return(
        <form>
            <input name="name" placeholder="Name" onChange={handleNameChange} />
            <input name="surname" ref={surnameInput} placeholder="Surname" onChange={handleSurnameChange} />
            <input name="age" placeholder="Age" onChange={handleAgeChange} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="button" onClick={handleChangeFocus}>Focus</button>
        </form>
    );
};

export default Form;
