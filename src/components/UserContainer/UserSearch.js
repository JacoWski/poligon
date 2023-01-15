import React, { useRef, useState } from "react";

const UserSearch = ({ onSearch, onReset }) => {
    const formRef = useRef();
    const [disable, setDisable] = useState(true);
    const handleClear = () => {
        formRef.current.reset();
        setDisable(true);
        onReset();
    };
    return(
        <form ref={formRef} onSubmit={onSearch}>
            <input type={'text'} placeholder="Znajdź pracownika..." onChange={() => setDisable(false)} />
            <button disabled={disable} type="submit" >Szukaj</button>
            <button disabled={disable} onClick={handleClear} >Reset</button>
        </form>
    );
};

export default UserSearch;
