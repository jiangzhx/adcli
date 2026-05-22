import type { ComponentElementRejectDetailInfoListStruct, ComponentInfoCanEmpty, ReviewElementType, ReviewResultStatus } from "../v3/index";
export interface ElementResultListStruct {
    element_id?: number | string;
    image_id?: string;
    video_id?: string;
    element_name?: string;
    element_value?: string;
    element_fingerprint?: string;
    component_info?: ComponentInfoCanEmpty;
    element_type?: ReviewElementType;
    review_status?: ReviewResultStatus;
    element_reject_detail_info?: ComponentElementRejectDetailInfoListStruct[];
}
