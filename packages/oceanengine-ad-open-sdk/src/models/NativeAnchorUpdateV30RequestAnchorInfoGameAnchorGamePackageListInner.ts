// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorUpdateV30RequestAnchorInfoGameAnchorGamePackageListInnerGiftInner } from "../models";

export interface NativeAnchorUpdateV30RequestAnchorInfoGameAnchorGamePackageListInner {
  android_package_code?: string;
  game_package_name?: string;
  gift?: NativeAnchorUpdateV30RequestAnchorInfoGameAnchorGamePackageListInnerGiftInner[];
  gift_end_date?: string;
  gift_regulation?: string;
  gift_start_date?: string;
  ios_package_code?: string;
}

