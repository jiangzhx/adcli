// Generated from oceanengine/ad_open_sdk_go models/model_dpa_video_get_v2_filtering.go
// Do not edit manually.

import type { DpaVideoGetV2FilteringImageMode } from "../models/index";

export interface DpaVideoGetV2Filtering {
  end_time?: string;
  image_mode?: DpaVideoGetV2FilteringImageMode;
  package_id?: string;
  package_name?: string;
  product_ids?: number | string[];
  product_platform_ids?: number | string[];
  start_time?: string;
}

