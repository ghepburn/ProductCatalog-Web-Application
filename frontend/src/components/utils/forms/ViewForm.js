import React from 'react';

const ViewForm = ({item}) => {


    const rows = Object.keys(item).map((key) => {
       
        if (typeof(item[key]) != "object" && typeof(item[key]) != "function") {
            return(
                <tr>
                    <td className="form-data-value">
                        {key}:
                    </td>
                    <td className="form-data-input">
                        {item[key]}
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
    