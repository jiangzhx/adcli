// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_carousel_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanCarouselGetV10FilteringSources } from "../models/index";

export interface QianchuanCarouselGetV10Filtering {
  end_time?: string;
  material_ids?: (number | string)[];
  query_string?: string;
  sources?: QianchuanCarouselGetV10FilteringSources[];
  start_time?: string;
}

