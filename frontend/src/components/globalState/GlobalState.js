import React, {Component} from 'react';

// import global contexts
import {SiteSettings} from "./siteSettings/SiteSettings";
import SiteSettingsContext from './siteSettings/SiteSettingsContext';

import Client from "../Client";

class GlobalState extends Component {

    constructor(props) {
        super(props);

        this.state = {
            siteSettings: new SiteSettings(),
            client: new Client()
        }
    }

    // SITE SETTINGS
    getSiteSettings = () => {
        return this.state.siteSettings;
    }

    setSiteSettings = (siteSettings) => {
        this.setState({siteSettings: siteSettings});
        return siteSettings;
    }


    render() { 
        return ( 
            <SiteSettingsContext.Provider value={{siteSettings: this.state.siteSettings, setSiteSettings: this.setSiteSettings, client: this.state.client}} >
                {this.props.children}
            </SiteSettingsContext.Provider>
        );
    }
}
 
export default GlobalState;