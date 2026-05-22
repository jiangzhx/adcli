// Generated from oceanengine/ad_open_sdk_go models/model_native_anchor_get_detail_v3_0_response_data_list_inner_game_anchor_game_package_list_inner.go
// Do not edit manually.

import type { NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorGamePackageListInnerGiftInner } from "../models/index";

export interface NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorGamePackageListInner {
  android_package_code?: string;
  game_gift_regulation?: string;
  game_package_name: string;
  gift?: NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorGamePackageListInnerGiftInner[];
  gift_end_date?: string;
  gift_start_date?: string;
  ios_package_code?: string;
}

