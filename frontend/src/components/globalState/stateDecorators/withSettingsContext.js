import React, {useContext} from 'react';
import SettingsContext from "../settings/SettingsContext";

const withSettingsContext = (WrappedComponent) => {
    return (props) => {
        const settingsContext = useContext(SettingsContext);

        // const displaySettings = displaySettingsContext.displaySettings;
        // const setCompanyDisplaySettings = displaySettingsContext.setCompanyDisplaySettings;

        return (
            <WrappedComponent {...props} settings={settingsContext.settings} setSettings={settingsContext.setSettings} integrater={settingsContext.integrater}/>
        );
    }
}
 
export default withSettingsContext;