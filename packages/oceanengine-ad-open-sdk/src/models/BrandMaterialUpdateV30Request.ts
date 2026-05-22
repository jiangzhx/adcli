// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandMaterialUpdateV30ContentType, BrandMaterialUpdateV30CreativeDisplayMode, BrandMaterialUpdateV30RequestCategoryInfo, BrandMaterialUpdateV30RequestLbs, BrandMaterialUpdateV30RequestMaterialListInner, BrandMaterialUpdateV30RequestTrackUrlGroupInfosInner, BrandMaterialUpdateV30RequestTrackUrlInfo } from "../models";

export interface BrandMaterialUpdateV30Request {
  advertiser_id: number | string;
  category_info: BrandMaterialUpdateV30RequestCategoryInfo;
  content_type?: BrandMaterialUpdateV30ContentType;
  creative_display_mode?: BrandMaterialUpdateV30CreativeDisplayMode;
  lbs?: BrandMaterialUpdateV30RequestLbs;
  material_list: BrandMaterialUpdateV30RequestMaterialListInner[];
  order_id: number | string;
  track_url_group_infos?: BrandMaterialUpdateV30RequestTrackUrlGroupInfosInner[];
  track_url_info?: BrandMaterialUpdateV30RequestTrackUrlInfo;
}

