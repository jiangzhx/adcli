// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_detail_property_struct.go
// Do not edit manually.

import type { MarketingAssetAttrClass, PromotedAssetAttrKey } from "../v3/index";

export interface DetailPropertyStruct {
  property_name?: PromotedAssetAttrKey;
  property_cn?: string;
  is_multiple?: boolean;
  is_required?: boolean;
  property_class?: MarketingAssetAttrClass;
  property_type?: string;
  property_value?: string[];
}

