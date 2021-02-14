import React, {Component} from 'react';

// import global contexts
import {DisplaySettings} from "./displaySettings/DisplaySettings";
import DisplaySettingsContext from './displaySettings/DisplaySetttingsContext';

// import {SiteSettings} from "./siteSettings";

class GlobalState extends Component {
    state = {  
        displaySettings: new DisplaySettings()
    }

    // DISPLAY SETTINGS

    getDisplaySettings = () => {
        return this.state.displaySettings;
    }

    setDisplaySettings = (displaySettings) => {
        this.setState({displaySettings: displaySettings});
        return displaySettings;
    }


    render() { 
        return ( 
            <DisplaySettingsContext.Provider value={{getDisplaySettings: this.getDisplaySettings, setDisplaySettings: this.setDisplaySettings}} >
                {this.props.children}
            </DisplaySettingsContext.Provider>
        );
    }
}
 
export default GlobalState;