import React from 'react';
import {withRouter} from "react-router-dom";

import Burger from '../../utils/Burger';

const Nav = ({company, history}) => {
    return (  
        <div className="nav">
            <div className="nav-title">
                DESIGN INNOVATIONS
            </div>
            <div className="desktop-nav">

            </div>
            <div className="mobile-nav">
                {/* <Burger addClass={"filter-burger"}/> */}
            </div>
        </div>
    );
}
 
export default withRouter(Nav);