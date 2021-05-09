import Transformer from "./Transformer";

import CompanySettings from "../../models/CompanySettings";

class CompanySettingsTransformer extends Transformer {
    
    transformItem(item) {
        return new CompanySettings(item);
    }

}

export default CompanySettingsTransformer;