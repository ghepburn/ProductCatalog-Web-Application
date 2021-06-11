import React from 'react';

const NavButton = ({title, picture, onClick}) => {
    return (  
        <div className="nav-button" onClick={onClick} >
            <img src={picture} />
            <div className="nav-button-title">
                {title}
            </div>
        </div>
    );
}
    
export default NavButton;