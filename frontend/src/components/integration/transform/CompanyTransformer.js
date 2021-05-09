import Transformer from "./Transformer";
import Company from "../../models/Company";

class CompanyTransformer extends Transformer {

    transformItem(item) {
        return new Company(item);
    }

}

export default CompanyTransformer;