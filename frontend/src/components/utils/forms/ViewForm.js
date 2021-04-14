import React from 'react';

const ViewForm = ({item}) => {


    const rows = Object.keys(item).map((key) => {
       
        if (typeof(item[key]) != "object" && typeof(item[key]) != "function") {
            return(
                <tr className="form-row">
                    <td className="form-key">
                        {key}:
                    </td>
                    <td className="form-value">
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
    