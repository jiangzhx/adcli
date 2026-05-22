// Generated from oceanengine/ad_open_sdk_go models/model_brand_creative_create_v3_0_request_creative_list_inner.go
// Do not edit manually.

import type { BrandCreativeCreateV30RequestCreativeListInnerAdvancedCreative, BrandCreativeCreateV30RequestCreativeListInnerAdvancedCreativeInfo } from "../models/index";

export interface BrandCreativeCreateV30RequestCreativeListInner {
  advanced_creative?: BrandCreativeCreateV30RequestCreativeListInnerAdvancedCreative;
  advanced_creative_info?: BrandCreativeCreateV30RequestCreativeListInnerAdvancedCreativeInfo;
  anchor_id?: string;
  aweme_id?: string;
  creative_is_AIGC: boolean;
  external_open_url?: string;
  external_url?: string;
  external_url_is_download?: boolean;
  external_url_title?: string;
  ies_core_user_id?: number | string;
  item_id?: number | string;
  material_package_id?: number | string;
  open_url?: string;
  title?: string;
  video_id?: string;
  web_url?: string;
  web_url_is_download?: boolean;
}

