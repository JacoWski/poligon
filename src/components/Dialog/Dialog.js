import React, { useEffect } from "react";
import * as Icons from '@fortawesome/free-solid-svg-icons';

import 'components/Dialog/Dialog.css';
import Icon from "components/Icons/Icon";

const Dialog = ({ show, header, children, onClose }) => {
    const closeOnEscKeyDown = (event) => {
        if ((event.charCode || event.keyCode) === 27) onClose();
    };
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscKeyDown);
        return () => document.body.removeEventListener('keydown', closeOnEscKeyDown);
    }, []);
    if (!show) return null;

    return(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4>{header}</h4>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className={'close'}>
                        {<Icon iconName={Icons.faClose}/>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
