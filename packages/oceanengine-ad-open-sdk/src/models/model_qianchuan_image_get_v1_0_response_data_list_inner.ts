// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_image_get_v1_0_response_data_list_inner.go
// Do not edit manually.

import type { QianchuanImageGetV10DataListImageMode, QianchuanImageGetV10DataListSource } from "../models/index";

export interface QianchuanImageGetV10ResponseDataListInner {
  analysis_type?: string[];
  create_time?: string;
  filename?: string;
  height?: number;
  id?: string;
  image_mode?: QianchuanImageGetV10DataListImageMode;
  is_ai_create?: boolean;
  material_id?: number | string;
  signature?: string;
  size?: number;
  source?: QianchuanImageGetV10DataListSource;
  tag?: string[];
  url?: string;
  width?: number;
}

