// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_review_element_prereview_results_get_request.go
// Do not edit manually.

import type { ElementStruct, SupplementStruct } from "../v3/index";

export interface ReviewElementPrereviewResultsGetRequest {
  account_id?: number | string;
  adgroup_id?: number | string;
  elements?: ElementStruct[];
  supplement?: SupplementStruct[];
}

