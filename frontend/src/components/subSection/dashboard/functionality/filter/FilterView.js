import React from 'react';
import AttributeDropDown from './AttributeDropDown';

const FilterView = ({products, filter, onUpdate, onClear}) => {

    const filterMap = filter.mapping;

    const filterView = Object.keys(filterMap).map((key)=>{
        let attribute = key;
        let attributeOptions = filterMap[key];
        
        const onClick = (name, value) => {
            onUpdate(attribute, name);
        }
        return(
            <AttributeDropDown attribute={attribute} attributeOptions={attributeOptions} onClick={onClick} />
        );
    });
    
    return (  
        <div className="filter-view">
            {filterView}
            <button onClick={onClear}>Clear</button>
        </div>
    );
}
 
export default FilterView;