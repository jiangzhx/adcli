// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorCreateV30RequestAnchorInfoGameAnchorGamePackageListInnerGiftInner } from "../models";

export interface NativeAnchorCreateV30RequestAnchorInfoGameAnchorGamePackageListInner {
  android_package_code?: string;
  game_package_name?: string;
  gift?: NativeAnchorCreateV30RequestAnchorInfoGameAnchorGamePackageListInnerGiftInner[];
  gift_end_date?: string;
  gift_regulation?: string;
  gift_start_date?: string;
  ios_package_code?: string;
}

