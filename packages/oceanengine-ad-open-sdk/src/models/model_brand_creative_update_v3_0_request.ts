// Generated from oceanengine/ad_open_sdk_go models/model_brand_creative_update_v3_0_request.go
// Do not edit manually.

import type { BrandCreativeUpdateV30RequestAdvancedCreative, BrandCreativeUpdateV30RequestAdvancedCreativeInfo, BrandCreativeUpdateV30RequestTrackUrlInfo } from "../models/index";

export interface BrandCreativeUpdateV30Request {
  ad_id: number | string;
  advanced_creative?: BrandCreativeUpdateV30RequestAdvancedCreative;
  advanced_creative_info?: BrandCreativeUpdateV30RequestAdvancedCreativeInfo;
  advertiser_id: number | string;
  anchor_id?: string;
  aweme_id?: string;
  creative_id: number | string;
  item_id?: number | string;
  track_url_info?: BrandCreativeUpdateV30RequestTrackUrlInfo;
}

