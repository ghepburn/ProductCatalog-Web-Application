import React from 'react';

const InputForm = ({content, onChange}) => {

    console.log("CONTENT");
    console.log(content);

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
                <tr>
                    <td className="form-data-value">
                        {key}
                    </td>
                    <td className="form-data-input">
                        <input className="form-input" name={key} onChange={updateState} defaultValue={content[key]}></input>
                    </td>
                </tr>
            );
        }
    });

    return (  
        <table className="form input-form">
            {rows}
            <button onClick={saveForm}>Save</button>
        </table>
    );
}
 
export default InputForm;
    