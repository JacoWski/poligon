import React, { useRef, useState } from "react";

import { useInput } from "utilities/hooks";

const TAX = 1.08;

const Restaurant = () => {
    const [result, setResult] = useState();
    const [tip, handleTipChange] = useInput(5);
    const [netto, handleNettoChange] = useInput();
    const hideForm = useRef();
    const showTip = useRef();

    const tipToMultiplier = () => (tip / 100);
    const handleClick = (event) => {
        event.preventDefault();
        setResult(netto * TAX * tipToMultiplier());
        hideForm.current.hidden = true;
        showTip.current.hidden = false;
    };

    return(
        <div>
            <form ref={hideForm}>
                <input type={'number'} name="netto" onChange={handleNettoChange}/>
                <select name="tip" onChange={handleTipChange}>
                    <option value={5}>5%</option>
                    <option value={10}>10%</option>
                    <option value={15}>15%</option>
                    <option value={20}>20%</option>
                </select>
                <button type="submit" onClick={handleClick}>Przelicz</button>
            </form>
            <p hidden ref={showTip}>{`Napiwek (${tip}%) wynosi: ${result}.`}</p>
        </div>
    );
};

export default Restaurant;
