// Generated from oceanengine/ad_open_sdk_go models/model_brand_creative_create_v3_0_request.go
// Do not edit manually.

import type { BrandCreativeCreateV30CreativeDisplayMode, BrandCreativeCreateV30RequestCategoryInfo, BrandCreativeCreateV30RequestCreativeListInner, BrandCreativeCreateV30RequestTrackUrlInfo } from "../models/index";

export interface BrandCreativeCreateV30Request {
  ad_id: number | string;
  advertiser_id: number | string;
  category_info: BrandCreativeCreateV30RequestCategoryInfo;
  creative_display_mode: BrandCreativeCreateV30CreativeDisplayMode;
  creative_list: BrandCreativeCreateV30RequestCreativeListInner[];
  staff_id?: number | string;
  track_url_info: BrandCreativeCreateV30RequestTrackUrlInfo;
}

