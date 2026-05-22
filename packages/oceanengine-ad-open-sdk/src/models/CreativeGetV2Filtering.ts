// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CreativeGetV2FilteringImageMode, CreativeGetV2FilteringLandingType, CreativeGetV2FilteringPricing } from "../models";

export interface CreativeGetV2Filtering {
  ad_id?: number;
  campaign_id?: number;
  creative_create_time?: string;
  creative_ids?: number[];
  creative_modify_time?: string;
  creative_title?: string;
  image_mode?: CreativeGetV2FilteringImageMode;
  landing_type?: CreativeGetV2FilteringLandingType;
  pricing?: CreativeGetV2FilteringPricing;
  status?: string;
}

