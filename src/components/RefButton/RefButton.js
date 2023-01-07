// import React, { useEffect, useRef } from "react";
import React from "react";

const RefButton = React.forwardRef((props, ref) => {
    // const btnRef = useRef();
    // useEffect(() => colorChange);
    // const colorChange = () => {
    //     btnRef.current.style.backgroundColor = 'red';
    //     btnRef.current.style.color = 'white';
    // };
    return(
        // <button ref={btnRef} style={{backgroundColor: 'blue'}} onMouseOver={colorChange}>Test Button</button>
        <button ref={ref} style={{backgroundColor: 'blue'}}>Test Button</button>
    );
});

export default RefButton;
