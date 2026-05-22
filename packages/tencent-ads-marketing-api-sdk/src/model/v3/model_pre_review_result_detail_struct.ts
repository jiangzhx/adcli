// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_pre_review_result_detail_struct.go
// Do not edit manually.

import type { GroupRiskLevel, PreReviewResultRejectReasonDetailStruct, PreReviewSiteSetDefinitionString } from "../v3/index";

export interface PreReviewResultDetailStruct {
  site_set?: PreReviewSiteSetDefinitionString;
  pre_review_result?: GroupRiskLevel;
  reject_reason_detail?: PreReviewResultRejectReasonDetailStruct[];
}

