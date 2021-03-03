import React, {useContext} from 'react';
import DisplaySettingsContext from "../displaySettings/DisplaySettingsContext";

const withDisplaySettingsContext = (WrappedComponent) => {
    return (props) => {
        const displaySettingsContext = useContext(DisplaySettingsContext);

        const displaySettings = displaySettingsContext.displaySettings;
        const setCompanyDisplaySettings = displaySettingsContext.setCompanyDisplaySettings;

        return (
            <WrappedComponent {...props} setCompanyDisplaySettings={setCompanyDisplaySettings} displaySettings={displaySettings} />
        );
    }
}
 
export default withDisplaySettingsContext;