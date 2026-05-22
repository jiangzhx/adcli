// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { GroupRiskLevel, PreReviewResultRejectReasonDetailStruct, PreReviewSiteSetDefinitionString } from "../models";

export interface PreReviewResultDetailStruct {
  site_set?: PreReviewSiteSetDefinitionString;
  pre_review_result?: GroupRiskLevel;
  reject_reason_detail?: PreReviewResultRejectReasonDetailStruct[];
}

