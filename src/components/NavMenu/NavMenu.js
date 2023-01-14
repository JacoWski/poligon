import React, { useEffect, useState } from "react";

const NavMenu = (props) => {
    const [show, setShow] = useState(props.show);
    useEffect(() => {
        setShow(props.show);
    }, [props.show]);
    if (!show) return null;
    return(
        <div>
            {props.menu.map((m, i) => (
                <a key={`link-${i}`} href={m.route} >{m.label}</a>
            ))}
            <button onClick={() => setShow(!show)}>Ukryj menu</button>
        </div>
    );
};

export default NavMenu;
