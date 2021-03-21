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
            displaySettings: [new DisplaySettings()],
            client: new Client()
        }
    }

    // All SETTINGS
    setSettings = (settings) => {
        
        const displaySettings = settings["displaySettings"];
        const defaultDisplaySettings = new DisplaySettings();

        const siteSettings = settings["siteSettings"];

        let newDisplaySettingsState = []

        // for each company insert defaults and add to state
        for (let company in displaySettings) {

            const companyDisplaySetting = displaySettings[company];
            companyDisplaySetting.company = company;

            // Insert default values
            for (let key of Object.keys(defaultDisplaySettings)) {
                if (!companyDisplaySetting[key]) {
                    companyDisplaySetting[key] = defaultDisplaySettings[key];
                }
            }

            // create state object
            const companyState = new DisplaySettings(companyDisplaySetting);
            newDisplaySettingsState.push(companyState);
        }
        
        this.setState({
            siteSettings: siteSettings,
            displaySettings: newDisplaySettingsState
        });

        console.log("DISPLAY SETTINGS");
        console.log(displaySettings);
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
        console.log(currentDisplaySettings);

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