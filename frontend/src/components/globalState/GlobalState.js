import React, {Component} from 'react';

// import global contexts
import Settings from "../models/Settings";
import SettingsContext from "./settings/SettingsContext";

import Client from "../models/Client";


class GlobalState extends Component {

    constructor(props) {
        super(props);

        this.state = {  
            settings: props.integrater.getDefaultSettings(),
            integrater: props.integrater
        }
    }

    // All SETTINGS
    setSettings = (settings) => {
        this.setState({settings: settings});
        return settings;
    }
        
    render() { 
        return ( 
            <SettingsContext.Provider value={{settings: this.state.settings, setSettings: this.setSettings, client: this.state.client}}>
                {this.props.children}
            </SettingsContext.Provider >
        );
    }
}

export default GlobalState;