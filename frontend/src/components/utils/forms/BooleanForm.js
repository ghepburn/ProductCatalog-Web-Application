import React from 'react';
import Checkbox from "../Checkbox";

const BooleanForm = ({item, itemOptions, onClick}) => {

    let [displayOptions, setDisplayOptions] = React.useState(false);

    const toggleDisplayOptions = () => {
        setDisplayOptions(!displayOptions);
    }

    const onCheck = (key, value) => {
        onClick(key, value);
    }

    const checkboxes = Object.keys(itemOptions).map((option)=> {
        
        if (typeof itemOptions[option] !== "function") {
            return(
                <Checkbox title={option} onClick={onCheck} checked={itemOptions[option]}/>
            );
        }
    });

    let content = displayOptions ? checkboxes : "";

    return (  
        <div className="form boolean-form">
            <a className={"boolean-form-button"} onClick={toggleDisplayOptions}>{item}</a>
            <div className="boolean-form-content">
                {content}
            </div>
        </div>
    );
}
 
export default BooleanForm;