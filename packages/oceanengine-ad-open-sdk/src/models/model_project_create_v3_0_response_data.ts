// Generated from oceanengine/ad_open_sdk_go models/model_project_create_v3_0_response_data.go
// Do not edit manually.

import type { ProjectCreateV30ResponseDataErrorKeywordsListInner } from "../models/index";

export interface ProjectCreateV30ResponseData {
  auto_duration_project_count?: number;
  auto_project_count?: number;
  error_keywords_list?: ProjectCreateV30ResponseDataErrorKeywordsListInner[];
  project_id?: number | string;
  supplementary_agreement_info?: string;
}

