import React from 'react';

const Burger = ({addClass}) => {
    return (  
        <div className={`burger ${addClass}`}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>
    );
}
 
export default Burger;