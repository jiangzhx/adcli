import type { ComponentInfoCanEmpty, RejectInfoLocationListStruct, ReviewElementType, ReviewResultStatus } from "../models";
export interface ElementRejectDetailInfoListStruct {
    element_name?: string;
    element_type?: ReviewElementType;
    element_value?: string;
    component_info?: ComponentInfoCanEmpty;
    reason?: string;
    review_status?: ReviewResultStatus;
    reject_info_location?: RejectInfoLocationListStruct[];
}
