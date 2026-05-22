// Generated from oceanengine/ad_open_sdk_go models/model_uni_project_list_get_v3_0_filtering.go
// Do not edit manually.

import type { UniProjectListGetV30FilteringStatusFirst, UniProjectListGetV30FilteringStatusSecond } from "../models/index";

export interface UniProjectListGetV30Filtering {
  name?: string;
  project_id?: (number | string)[];
  status_first?: UniProjectListGetV30FilteringStatusFirst;
  status_second?: UniProjectListGetV30FilteringStatusSecond;
}

