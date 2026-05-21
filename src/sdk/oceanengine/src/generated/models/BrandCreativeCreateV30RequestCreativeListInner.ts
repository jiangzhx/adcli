// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { BrandCreativeCreateV30RequestCreativeListInnerAdvancedCreative, BrandCreativeCreateV30RequestCreativeListInnerAdvancedCreativeInfo } from "../models";

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
  ies_core_user_id?: number;
  item_id?: number;
  material_package_id?: number;
  open_url?: string;
  title?: string;
  video_id?: string;
  web_url?: string;
  web_url_is_download?: boolean;
}

