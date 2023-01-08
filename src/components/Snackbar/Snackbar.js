/* eslint-disable default-case */
import React, { useEffect, useRef } from "react";
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import 'components/Snackbar/Snackbar.css';
import Icon from "components/Icons/Icon";

const snackType = ["error", "warning", "success", "info"];

const Snackbar = ({ body, iconName, show, onClose, timeout, type }) => {
    const snackRef = useRef();
    var typeStyles = {};
    if (type) {
        switch (type) {
            case "error":
                typeStyles = {
                    backgroundColor: 'lightsalmon',
                    color: 'white',
                };
                iconName = SolidIcons.faExclamationCircle;
                break;
            case "warning":
                typeStyles = {
                    backgroundColor: 'orange',
                    color: 'black',
                };
                iconName = SolidIcons.faExclamationTriangle;
                break;
            case "info":
                typeStyles = {
                    backgroundColor: 'lightblue',
                    color: 'black',
                };
                iconName = SolidIcons.faCircleInfo;
                break;
            case "success":
                typeStyles = {
                    backgroundColor: 'lightseagreen',
                    color: 'black',
                };
                iconName = SolidIcons.faCircleCheck;
                break;
        }
    }

    useEffect(() => {
        if (timeout) {
            const interval = setInterval(() => {
                onClose();
            }, timeout * 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, []);
    if (!show) return null;
    return(
        <div ref={snackRef} className="snackbar" style={typeStyles}>
            <div className="snack-icon">
                {(iconName) && <Icon iconName={iconName} />}
            </div>
            <div className="snack-body">{body}</div>
            <div className="snack-close">
                <button className="close" onClick={onClose}>
                    <Icon  iconName={SolidIcons.faClose}/>
                </button>
            </div>
        </div>
    );
};

Snackbar.propsType = {
    type: PropTypes.oneOf(snackType),
    iconName: PropTypes.oneOf(SolidIcons)
};

export default Snackbar;
