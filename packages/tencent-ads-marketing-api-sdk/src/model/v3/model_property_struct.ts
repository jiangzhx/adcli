// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_property_struct.go
// Do not edit manually.

import type { MarketingAssetAttrClass, PromotedAssetAttrKey } from "../v3/index";

export interface PropertyStruct {
  property_name?: PromotedAssetAttrKey;
  property_value?: string[];
  property_class?: MarketingAssetAttrClass;
  property_cn?: string;
}

