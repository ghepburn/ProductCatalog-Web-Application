import React from 'react';

const MiniButton = ({onClick, text, addClassName}) => {
    return (  
        <button className={`mini-standard-button ${addClassName}`} onClick={() => {onClick()}}>{text}</button>
    );
}
 
export default MiniButton;