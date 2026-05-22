import type { UrgeFailedReason, UrgeResult } from "../v3/index";
export interface ComponentElementUrgeReviewAddResponseData {
    urge_result?: UrgeResult;
    urge_failed_reason?: UrgeFailedReason;
    reason_msg?: string;
}
