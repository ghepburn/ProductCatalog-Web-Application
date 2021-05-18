import React, {Component} from 'react';

// import global contexts
import SettingsContext from "./settings/SettingsContext";


class GlobalState extends Component {

    constructor(props) {
        super(props);

        this.state = {  
            settings: props.defaultSettings,
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
            <SettingsContext.Provider value={{settings: this.state.settings, setSettings: this.setSettings, integrater: this.state.integrater}}>
                {this.props.children}
            </SettingsContext.Provider >
        );
    }
}

export default GlobalState;