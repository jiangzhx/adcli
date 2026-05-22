import type { GroupRiskLevel, IntSiteSetDefinition, PreReviewResultRejectReasonDetailStruct } from "../model/index";
export interface PreReviewResultDetailStruct {
    site_set?: IntSiteSetDefinition;
    pre_review_result?: GroupRiskLevel;
    reject_reason_detail?: PreReviewResultRejectReasonDetailStruct[];
}
