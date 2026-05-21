// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorGamePackageListInnerGiftInner } from "../models";

export interface NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorGamePackageListInner {
  android_package_code?: string;
  game_gift_regulation?: string;
  game_package_name: string;
  gift?: NativeAnchorGetDetailV30ResponseDataListInnerGameAnchorGamePackageListInnerGiftInner[];
  gift_end_date?: string;
  gift_start_date?: string;
  ios_package_code?: string;
}

