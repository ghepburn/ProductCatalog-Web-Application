import React from 'react';

const Selector = ({title, value, onUpdate}) => {
    
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        onUpdate(name, value);
    }

    return (  
        <div className="selecter">
            <label>{title}</label>
            <input type="checkbox" name={title} defaultValue={value} onChange={()=>{onChange}}></input>
        </div>
    );
}
 
export default Selector;