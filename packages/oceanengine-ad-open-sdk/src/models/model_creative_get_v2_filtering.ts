// Generated from oceanengine/ad_open_sdk_go models/model_creative_get_v2_filtering.go
// Do not edit manually.

import type { CreativeGetV2FilteringImageMode, CreativeGetV2FilteringLandingType, CreativeGetV2FilteringPricing } from "../models/index";

export interface CreativeGetV2Filtering {
  ad_id?: number | string;
  campaign_id?: number | string;
  creative_create_time?: string;
  creative_ids?: number | string[];
  creative_modify_time?: string;
  creative_title?: string;
  image_mode?: CreativeGetV2FilteringImageMode;
  landing_type?: CreativeGetV2FilteringLandingType;
  pricing?: CreativeGetV2FilteringPricing;
  status?: string;
}

