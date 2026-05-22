// Generated from tencentad/marketing-api-go-sdk pkg/model/model_pre_review_detail_struct.go
// Do not edit manually.

import type { GroupRiskLevel, IntSiteSetDefinition, RejectReasonDetailStruct } from "../model/index";

export interface PreReviewDetailStruct {
  site_set?: IntSiteSetDefinition;
  pre_review_result?: GroupRiskLevel;
  reject_reason_detail?: RejectReasonDetailStruct[];
}

