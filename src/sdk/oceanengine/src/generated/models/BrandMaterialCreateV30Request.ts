// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { BrandMaterialCreateV30ContentType, BrandMaterialCreateV30CreativeDisplayMode, BrandMaterialCreateV30RequestCategoryInfo, BrandMaterialCreateV30RequestLbs, BrandMaterialCreateV30RequestMaterialListInner, BrandMaterialCreateV30RequestTrackUrlInfo } from "../models";

export interface BrandMaterialCreateV30Request {
  advertiser_id?: number;
  category_info: BrandMaterialCreateV30RequestCategoryInfo;
  content_type?: BrandMaterialCreateV30ContentType;
  creative_display_mode?: BrandMaterialCreateV30CreativeDisplayMode;
  lbs?: BrandMaterialCreateV30RequestLbs;
  material_list: BrandMaterialCreateV30RequestMaterialListInner[];
  order_id: number;
  track_url_info?: BrandMaterialCreateV30RequestTrackUrlInfo;
}

