import React from 'react';

const MiniSecondaryButton = ({onClick, text, addClassName}) => {
    return (  
        <button className={`mini-secondary-standard-button ${addClassName}`} onClick={() => {onClick()}}>{text}</button>
    );
}
 
export default MiniSecondaryButton;