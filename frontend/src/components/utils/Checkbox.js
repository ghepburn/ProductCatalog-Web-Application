import React from 'react';

const Checkbox = ({title, onClick, checked}) => {
    
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.checked;
        onClick(name, value)
    }
    
    return (  
        <div className="checkbox">
            <input className="checkbox-input" name={title} type="checkbox" onChange={onChange} checked={checked}></input>
            <label className="checkbox-label">{title}</label>
        </div>
        
    );
}
 
export default Checkbox;