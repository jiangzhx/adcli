import type { GroupRiskLevel, PreReviewSiteSetDefinitionString, RejectReasonDetailStruct } from "../v3/index";
export interface PreReviewDetailStruct {
    site_set?: PreReviewSiteSetDefinitionString;
    pre_review_result?: GroupRiskLevel;
    reject_reason_detail?: RejectReasonDetailStruct[];
}
