// Generated from oceanengine/ad_open_sdk_go models/model_native_anchor_get_v3_0_filtering.go
// Do not edit manually.

import type { NativeAnchorGetV30FilteringAnchorType, NativeAnchorGetV30FilteringExternalAction, NativeAnchorGetV30FilteringLandingType, NativeAnchorGetV30FilteringSource, NativeAnchorGetV30FilteringStatus } from "../models/index";

export interface NativeAnchorGetV30Filtering {
  anchor_end_time?: string;
  anchor_id?: string;
  anchor_name?: string;
  anchor_start_time?: string;
  anchor_type?: NativeAnchorGetV30FilteringAnchorType[];
  android_package_name?: string;
  external_action?: NativeAnchorGetV30FilteringExternalAction;
  ios_package_name?: string;
  landing_type?: NativeAnchorGetV30FilteringLandingType;
  source?: NativeAnchorGetV30FilteringSource[];
  status?: NativeAnchorGetV30FilteringStatus[];
}

