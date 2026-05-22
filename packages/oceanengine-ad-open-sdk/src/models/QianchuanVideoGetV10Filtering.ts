// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanVideoGetV10FilteringImageMode, QianchuanVideoGetV10FilteringSources } from "../models";

export interface QianchuanVideoGetV10Filtering {
  end_time?: string;
  image_mode?: QianchuanVideoGetV10FilteringImageMode[];
  material_ids?: number[];
  signatures?: string[];
  sources?: QianchuanVideoGetV10FilteringSources[];
  start_time?: string;
  tags?: string[];
  video_ids?: string[];
}

