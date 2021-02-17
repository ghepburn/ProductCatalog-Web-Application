import React, {useContext} from 'react';
import DisplaySettingsContext from "../displaySettings/DisplaySettingsContext";

const withDisplaySettingsContext = (WrappedComponent) => {
    return (props) => {
        const displaySettingsContext = useContext(DisplaySettingsContext);

        const displaySettings = displaySettingsContext.displaySettings;
        const setDisplaySettings = displaySettingsContext.setDisplaySettings;

        return (
            <WrappedComponent {...props} setDisplaySettings={setDisplaySettings} displaySettings={displaySettings} />
        );
    }
}
 
export default withDisplaySettingsContext;