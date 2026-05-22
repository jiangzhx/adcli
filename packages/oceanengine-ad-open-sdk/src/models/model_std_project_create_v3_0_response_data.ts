// Generated from oceanengine/ad_open_sdk_go models/model_std_project_create_v3_0_response_data.go
// Do not edit manually.

import type { StdProjectCreateV30ResponseDataErrorKeywordsListInner } from "../models/index";

export interface StdProjectCreateV30ResponseData {
  auto_duration_project_count?: number;
  error_keywords_list?: StdProjectCreateV30ResponseDataErrorKeywordsListInner[];
  notice?: string;
  project_id?: number | string;
  supplementary_agreement_info?: string;
}

