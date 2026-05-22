import type { PrereviewRejectInfoLocationStruct } from "../model/index";
export interface RejectReasonDetailStruct {
    reject_reason_id?: string;
    reject_reason_content?: string;
    case_doc?: string;
    case_content?: string;
    reject_info_locations?: PrereviewRejectInfoLocationStruct[];
}
