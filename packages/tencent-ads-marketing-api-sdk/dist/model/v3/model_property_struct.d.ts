import type { MarketingAssetAttrClass, PromotedAssetAttrKey } from "../v3/index";
export interface PropertyStruct {
    property_name?: PromotedAssetAttrKey;
    property_value?: string[];
    property_class?: MarketingAssetAttrClass;
    property_cn?: string;
}
