import React from 'react';

import NavButton from "../../utils/buttons/NavButton";

import withProductCompareContext from '../state/stateDecorators/withProductCompareContext';

const BottomNav = ({toggleCompareMode}) => {

    let buttons = [
        {
            onClick: toggleCompareMode(),
            picture: "",
            title: "Compare"
        }
    ];

    let mappedButtons = buttons.map((button) => {
        return <NavButton title={button.title} picture={button.picture} onClick={button.onClick} />
    });

    return (  
        <div className="bottom-nav">
            {mappedButtons}
        </div>
    );
}
 
export default withProductCompareContext(BottomNav);