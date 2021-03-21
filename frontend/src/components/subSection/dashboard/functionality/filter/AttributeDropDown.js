import React from 'react';
import Checkbox from "./Checkbox";

const AttributeDropDown = ({attribute, attributeOptions, onClick}) => {

    // let [state, setState] = React.useState(attributeOptions);

    const onCheck = (name, value) => {
        onClick(name, value);
        // let updatedState = state;
        // updatedState[name] = !value;
        // setState(updatedState);
    }

    const checkboxes = Object.keys(attributeOptions).map((option)=> {
        return(
            <Checkbox title={option} onClick={onCheck} checked={attributeOptions[option]}/>
        );
    });

    return (  
        <div className="attribute-drop-down">
            <p>{attribute}</p>
            {checkboxes}
        </div>
    );
}
 
export default AttributeDropDown;