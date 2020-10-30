import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({buttonText, onClickHandler}) => {

    const buttonClickHandler  = () => {
        if(onClickHandler){
            onClickHandler();
        }
    }

    return (
        <button className="button" data-test="buttonComponent" onClick={() => buttonClickHandler()}>
            {buttonText}
        </button>
    );
}

Button.propTypes = {
    buttonText: PropTypes.string,
    onClickHandler: PropTypes.func
}

export default Button;
