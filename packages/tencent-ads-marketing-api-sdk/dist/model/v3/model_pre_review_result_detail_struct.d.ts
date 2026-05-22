import type { GroupRiskLevel, PreReviewResultRejectReasonDetailStruct, PreReviewSiteSetDefinitionString } from "../v3/index";
export interface PreReviewResultDetailStruct {
    site_set?: PreReviewSiteSetDefinitionString;
    pre_review_result?: GroupRiskLevel;
    reject_reason_detail?: PreReviewResultRejectReasonDetailStruct[];
}
