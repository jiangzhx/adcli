import type { GroupRiskLevel, IntSiteSetDefinition, RejectReasonDetailStruct } from "../model/index";
export interface PreReviewDetailStruct {
    site_set?: IntSiteSetDefinition;
    pre_review_result?: GroupRiskLevel;
    reject_reason_detail?: RejectReasonDetailStruct[];
}
