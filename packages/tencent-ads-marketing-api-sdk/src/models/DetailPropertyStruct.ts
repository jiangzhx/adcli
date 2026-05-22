// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { MarketingAssetAttrClass, PromotedAssetAttrKey } from "../models";

export interface DetailPropertyStruct {
  property_name?: PromotedAssetAttrKey;
  property_cn?: string;
  is_multiple?: boolean;
  is_required?: boolean;
  property_class?: MarketingAssetAttrClass;
  property_type?: string;
  property_value?: string[];
}

