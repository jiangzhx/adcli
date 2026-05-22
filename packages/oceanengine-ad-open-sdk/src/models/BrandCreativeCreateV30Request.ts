// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandCreativeCreateV30CreativeDisplayMode, BrandCreativeCreateV30RequestCategoryInfo, BrandCreativeCreateV30RequestCreativeListInner, BrandCreativeCreateV30RequestTrackUrlInfo } from "../models";

export interface BrandCreativeCreateV30Request {
  ad_id: number;
  advertiser_id: number;
  category_info: BrandCreativeCreateV30RequestCategoryInfo;
  creative_display_mode: BrandCreativeCreateV30CreativeDisplayMode;
  creative_list: BrandCreativeCreateV30RequestCreativeListInner[];
  staff_id?: number;
  track_url_info: BrandCreativeCreateV30RequestTrackUrlInfo;
}

