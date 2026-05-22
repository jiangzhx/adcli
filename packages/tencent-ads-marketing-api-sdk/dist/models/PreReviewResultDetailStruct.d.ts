import type { GroupRiskLevel, PreReviewResultRejectReasonDetailStruct, PreReviewSiteSetDefinitionString } from "../models";
export interface PreReviewResultDetailStruct {
    site_set?: PreReviewSiteSetDefinitionString;
    pre_review_result?: GroupRiskLevel;
    reject_reason_detail?: PreReviewResultRejectReasonDetailStruct[];
}
