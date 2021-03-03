import React, {Component} from 'react';

// import global contexts
import {SiteSettings} from "./siteSettings/SiteSettings";
import SiteSettingsContext from './siteSettings/SiteSettingsContext';
import DisplaySettings from "./displaySettings/DisplaySettings";
import DisplaySettingsContext from './displaySettings/DisplaySettingsContext';

import Client from "../Client";

class GlobalState extends Component {

    constructor(props) {
        super(props);

        this.state = {
            siteSettings: new SiteSettings(),
            displaySettings: new DisplaySettings(),
            client: new Client()
        }
    }

    // All SETTINGS
    setSettings = (settings) => {
        this.setState({
            siteSettings: settings["siteSettings"],
            displaySettings: settings["displaySettings"]
        });
    }

    // SITE SETTINGS
    getSiteSettings = () => {
        return this.state.siteSettings;
    }

    setSiteSettings = (siteSettings) => {
        this.setState({siteSettings: siteSettings});
        return siteSettings;
    }

     // DISPLAY SETTINGS
     getDisplaySettings = () => {
        return this.state.displaySettings;
    }

    setCompanyDisplaySettings = (companyDisplaySettings) => {
        const currentDisplaySettings = this.state.displaySettings;
        let found = false;
        for (let key in Object.keys(currentDisplaySettings)) {
            if (key === companyDisplaySettings.company) {
                currentDisplaySettings[companyDisplaySettings.company] = companyDisplaySettings;
                found = true;
                break;
            }
        }

        if (found) {
            this.setState({
                displaySettings: currentDisplaySettings
            });
        }

        return currentDisplaySettings;
    }


    render() { 
        return ( 
            <SiteSettingsContext.Provider value={{siteSettings: this.state.siteSettings, setSiteSettings: this.setSiteSettings, setSettings: this.setSettings, client: this.state.client}} >
                <DisplaySettingsContext.Provider value={{displaySettings: this.state.displaySettings, setCompanyDisplaySettings: this.setCompanyDisplaySettings}} >
                    {this.props.children}
                </DisplaySettingsContext.Provider>
            </SiteSettingsContext.Provider>
        );
    }
}
 
export default GlobalState;