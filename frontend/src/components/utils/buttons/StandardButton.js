import React from 'react';

const StandardButton = ({onClick, text}) => {
    return (  
        <button className="standard-button" onClick={() => {onClick()}}>{text}</button>
    );
}
 
export default StandardButton;