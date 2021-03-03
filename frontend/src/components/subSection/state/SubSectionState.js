import React, { Component } from 'react';

import DisplaySettings from "./displaySettings/DisplaySettings";
import DisplaySettingsContext from "./displaySettings/DisplaySettingsContext";

class SubSectionState extends Component {

    constructor(props) {
        super(props);
        const company = props.company;

        this.state = {
            displaySettings: props.displaySettings
        }
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
            <DisplaySettingsContext.Provider value={{displaySettings: this.state.displaySettings, setDisplaySettings: this.setDisplaySettings}} >
                {this.props.children}
            </DisplaySettingsContext.Provider>
        );
    }
}
 
export default SubSectionState;