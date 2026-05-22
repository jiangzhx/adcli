// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanImageGetV10FilteringImageMode, QianchuanImageGetV10FilteringSources } from "../models";

export interface QianchuanImageGetV10Filtering {
  end_time?: string;
  image_ids?: string[];
  image_mode?: QianchuanImageGetV10FilteringImageMode[];
  material_ids?: number | string[];
  signatures?: string[];
  sources?: QianchuanImageGetV10FilteringSources[];
  start_time?: string;
  tags?: string[];
}

