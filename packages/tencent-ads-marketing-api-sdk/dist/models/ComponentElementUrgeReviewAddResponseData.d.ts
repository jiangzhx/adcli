import type { UrgeFailedReason, UrgeResult } from "../models";
export interface ComponentElementUrgeReviewAddResponseData {
    urge_result?: UrgeResult;
    urge_failed_reason?: UrgeFailedReason;
    reason_msg?: string;
}
