import React from 'react';

// styles
import './custom-button.styles.scss';

const CustomButton = ({ children, customClass, ...otherProps }) => {
    return (
        <button className={`${customClass} custom-button`} { ...otherProps } >{ children }</button>
    );
};

export default CustomButton;