import React from 'react';

const ViewForm = ({content}) => {

    const contentState = content;

    const rows = Object.keys(content).map((key) => {
       
        if (typeof(content[key]) != "object") {
            return(
                <tr>
                    <td className="form-data-value">
                        {key}
                    </td>
                    <td className="form-data-input">
                        {content[key]}
                    </td>
                </tr>
            );
        }
    });

    return (  
        <table className="form view-form">
            {rows}
        </table>
    );
}
 
export default ViewForm;
    