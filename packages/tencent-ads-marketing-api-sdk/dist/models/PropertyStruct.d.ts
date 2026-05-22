import type { MarketingAssetAttrClass, PromotedAssetAttrKey } from "../models";
export interface PropertyStruct {
    property_name?: PromotedAssetAttrKey;
    property_value?: string[];
    property_class?: MarketingAssetAttrClass;
    property_cn?: string;
}
