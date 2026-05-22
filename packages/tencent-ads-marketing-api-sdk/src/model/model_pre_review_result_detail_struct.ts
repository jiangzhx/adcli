// Generated from tencentad/marketing-api-go-sdk pkg/model/model_pre_review_result_detail_struct.go
// Do not edit manually.

import type { GroupRiskLevel, IntSiteSetDefinition, PreReviewResultRejectReasonDetailStruct } from "../model/index";

export interface PreReviewResultDetailStruct {
  site_set?: IntSiteSetDefinition;
  pre_review_result?: GroupRiskLevel;
  reject_reason_detail?: PreReviewResultRejectReasonDetailStruct[];
}

