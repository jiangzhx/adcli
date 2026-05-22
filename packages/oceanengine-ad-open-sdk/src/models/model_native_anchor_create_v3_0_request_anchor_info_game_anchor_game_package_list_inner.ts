// Generated from oceanengine/ad_open_sdk_go models/model_native_anchor_create_v3_0_request_anchor_info_game_anchor_game_package_list_inner.go
// Do not edit manually.

import type { NativeAnchorCreateV30RequestAnchorInfoGameAnchorGamePackageListInnerGiftInner } from "../models/index";

export interface NativeAnchorCreateV30RequestAnchorInfoGameAnchorGamePackageListInner {
  android_package_code?: string;
  game_package_name?: string;
  gift?: NativeAnchorCreateV30RequestAnchorInfoGameAnchorGamePackageListInnerGiftInner[];
  gift_end_date?: string;
  gift_regulation?: string;
  gift_start_date?: string;
  ios_package_code?: string;
}

