import React, {useContext} from 'react';
import DisplaySettingsContext from "../displaySettings/DisplaySetttingsContext";

const withDisplaySettingsContext = (WrappedComponent) => {
    return (props) => {
        const displaySettingsContext = useContext(DisplaySettingsContext);

        const getDisplaySettings = displaySettingsContext.getDisplaySettings;
        const setDisplaySettings = displaySettingsContext.setDisplaySettings;

        return (
            <WrappedComponent {...props} setDisplaySettings={setDisplaySettings} getDisplaySettings={getDisplaySettings} />
        );
    }
}
 
export default withDisplaySettingsContext;