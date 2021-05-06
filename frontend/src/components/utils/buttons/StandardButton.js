import React from 'react';
import { Redirect } from 'react-router';

const StandardButton = ({onClick, text, addClassName}) => {

    return (  
        <button className={`standard-button ${addClassName}`} onClick={() => {onClick()}} >{text}</button>
    );
}
 
export default StandardButton;