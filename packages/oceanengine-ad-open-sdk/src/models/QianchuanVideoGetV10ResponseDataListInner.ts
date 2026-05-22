// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanVideoGetV10DataListImageMode, QianchuanVideoGetV10DataListSource } from "../models";

export interface QianchuanVideoGetV10ResponseDataListInner {
  bit_rate?: number;
  create_time?: string;
  duration?: number;
  filename?: string;
  format?: string;
  height?: number;
  id?: string;
  image_mode?: QianchuanVideoGetV10DataListImageMode;
  is_ai_create?: boolean;
  material_id?: number;
  poster_url?: string;
  signature?: string;
  size?: number;
  source?: QianchuanVideoGetV10DataListSource;
  tags?: string[];
  url?: string;
  width?: number;
}

