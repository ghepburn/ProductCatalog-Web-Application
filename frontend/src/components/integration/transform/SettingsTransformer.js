import Settings from "../../models/Settings";
import Transformer from "./Transformer";

class SettingsTransformer extends Transformer {

    transformItem(item) {
        return new Settings(item);
    }

}

export default SettingsTransformer;