// Generated from oceanengine/ad_open_sdk_go models/model_promotion_newcustomer_create_v3_0_request_audience.go
// Do not edit manually.

import type { PromotionNewcustomerCreateV30AudienceAge, PromotionNewcustomerCreateV30AudienceGender, PromotionNewcustomerCreateV30AudienceLocationType } from "../models/index";

export interface PromotionNewcustomerCreateV30RequestAudience {
  age?: PromotionNewcustomerCreateV30AudienceAge[];
  city?: number[];
  gender?: PromotionNewcustomerCreateV30AudienceGender;
  location_type?: PromotionNewcustomerCreateV30AudienceLocationType;
  region_version?: string;
}

