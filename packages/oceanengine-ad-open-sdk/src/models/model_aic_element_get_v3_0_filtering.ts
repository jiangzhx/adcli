// Generated from oceanengine/ad_open_sdk_go models/model_aic_element_get_v3_0_filtering.go
// Do not edit manually.

import type { AicElementGetV30FilteringElementType, AicElementGetV30FilteringUseAs } from "../models/index";

export interface AicElementGetV30Filtering {
  create_end_time?: string;
  create_start_time?: string;
  element_ids?: number | string[];
  element_name?: string;
  element_type?: AicElementGetV30FilteringElementType;
  path_name?: string;
  use_as?: AicElementGetV30FilteringUseAs;
}

