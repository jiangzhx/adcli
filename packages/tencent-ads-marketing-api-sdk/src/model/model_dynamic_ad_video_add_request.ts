// Generated from tencentad/marketing-api-go-sdk pkg/model/model_dynamic_ad_video_add_request.go
// Do not edit manually.

import type { AdNum } from "../model/index";

export interface DynamicAdVideoAddRequest {
  account_id?: number | string;
  product_catalog_id?: number | string;
  product_mode?: AdNum;
  product_source?: string;
  product_outer_id?: string;
  product_series_id?: number | string;
  video_max_duration?: number;
  dynamic_ad_template_id?: number | string;
}

