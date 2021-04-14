import React from 'react';

const InputForm = ({content, onChange}) => {

    const contentState = content;
    
    const saveForm = () => {
        onChange(contentState);
    }

    const updateState = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        contentState[key] = value;
    }

    const rows = Object.keys(content).map((key) => {
       
        if (typeof(content[key]) != "object") {
            return(
                <tr className="form-row">
                    <td className="form-key">
                        {key}
                    </td>
                    <td className="form-value">
                        <input className="form-value-input" name={key} onChange={updateState} defaultValue={content[key]}></input>
                    </td>
                </tr>
            );
        }
    });

    return (  
        <table className="form input-form">
            {rows}
            <button className="form-button" onClick={saveForm}>Save</button>
        </table>
    );
}
 
export default InputForm;
    