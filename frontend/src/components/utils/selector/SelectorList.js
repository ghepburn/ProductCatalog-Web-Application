import React from 'react';
import Selector from "./Selector";

const SelectorList = ({items}) => {

    onUpdate = (name, value) => {
        console.log("Updateing");
        console.log(name, value);
    }

    const selectors = items.map((item)=> {
        return(
            <Selector title={item} value={false} onUpdate={}/>
        );
    })

    return (  
        <div className="selector-list">

        </div>
    );
}
 
export default SelectorList;