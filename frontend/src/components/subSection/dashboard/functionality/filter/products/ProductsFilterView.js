import React from 'react';
import BooleanForm from '../../../../../utils/forms/BooleanForm';

const FilterView = ({products, filter, onUpdate, onClear}) => {

    const filterView = Object.keys(filter.mapping).map((field)=>{
    
        let fieldValues = filter.mapping[field];
        
        const onClick = (name, value) => {
            onUpdate(field, name);
        }
        return(
            <div className="filter-section"><BooleanForm item={field} itemOptions={fieldValues} onClick={onClick} /></div>
        );
    });
    
    return (  
        <div className="filter-view">
            {filterView}
            <button className="secondary-button filter-clear-button" onClick={onClear}>CLEAR</button>
        </div>
    );
}
 
export default FilterView;