// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanImageGetV10DataListImageMode, QianchuanImageGetV10DataListSource } from "../models";

export interface QianchuanImageGetV10ResponseDataListInner {
  analysis_type?: string[];
  create_time?: string;
  filename?: string;
  height?: number;
  id?: string;
  image_mode?: QianchuanImageGetV10DataListImageMode;
  is_ai_create?: boolean;
  material_id?: number;
  signature?: string;
  size?: number;
  source?: QianchuanImageGetV10DataListSource;
  tag?: string[];
  url?: string;
  width?: number;
}

