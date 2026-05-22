// Generated from oceanengine/ad_open_sdk_go models/model_native_anchor_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { NativeAnchorGetV30DataListAnchorShareType, NativeAnchorGetV30DataListAnchorType, NativeAnchorGetV30DataListSource, NativeAnchorGetV30DataListStatus } from "../models/index";

export interface NativeAnchorGetV30ResponseDataListInner {
  anchor_id?: string;
  anchor_name?: string;
  anchor_share_type?: NativeAnchorGetV30DataListAnchorShareType;
  anchor_type?: NativeAnchorGetV30DataListAnchorType;
  android_package_name?: string;
  create_time?: string;
  ios_package_name?: string;
  source?: NativeAnchorGetV30DataListSource;
  status?: NativeAnchorGetV30DataListStatus;
}

