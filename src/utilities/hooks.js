import { useState } from "react";

export const useInput = (initialValue = '') => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return [value, handleChange];
};