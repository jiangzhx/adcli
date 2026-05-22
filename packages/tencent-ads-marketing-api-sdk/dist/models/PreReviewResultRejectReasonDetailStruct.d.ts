import type { PreReviewRejectInfoLocation } from "../models";
export interface PreReviewResultRejectReasonDetailStruct {
    reject_reason_id?: string;
    reject_reason_content?: string;
    case_doc?: string;
    case_content?: string;
    reject_info_locations?: PreReviewRejectInfoLocation[];
}
