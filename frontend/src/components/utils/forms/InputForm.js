import React from 'react';

const InputForm = ({content, onChange}) => {
    
    const [contentState, setContentState] = React.useState(content);

    const saveForm = () => {
        onChange(contentState);
    }

    const updateState = (event) => {
        const key = event.target.key;
        const value = event.target.value;
        const contentStateCopy = contentState;
        contentStateCopy[key] = value;
        setContentState(contentStateCopy);
        console.log(value);
    }

    console.log("CONTENT");
    console.log(content);
    const rows = Object.keys(content).map((key) => {
        console.log(key);
        console.log(content[key]);
        if (typeof(content[key]) == String || typeof(content[key]) == Number) {
        return(
            <tr>
                <td>
                    {key}
                </td>
                <td>
                    <input onChange={updateState} defaultValue={content[key]}></input>
                </td>
            </tr>
        );
    })

    return (  
        <div className="form input-form">
            <table>
                {rows}
            </table>
            <button onClick={saveForm}>Save</button>
        </div>
    );
}
 
export default InputForm;
    