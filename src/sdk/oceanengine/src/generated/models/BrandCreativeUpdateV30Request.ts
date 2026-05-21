// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { BrandCreativeUpdateV30RequestAdvancedCreative, BrandCreativeUpdateV30RequestAdvancedCreativeInfo, BrandCreativeUpdateV30RequestTrackUrlInfo } from "../models";

export interface BrandCreativeUpdateV30Request {
  ad_id: number;
  advanced_creative?: BrandCreativeUpdateV30RequestAdvancedCreative;
  advanced_creative_info?: BrandCreativeUpdateV30RequestAdvancedCreativeInfo;
  advertiser_id: number;
  anchor_id?: string;
  aweme_id?: string;
  creative_id: number;
  item_id?: number;
  track_url_info?: BrandCreativeUpdateV30RequestTrackUrlInfo;
}

