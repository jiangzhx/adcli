import type { ComponentElementRejectDetailInfoListStruct, ReviewElementType, ReviewResultStatus } from "../models";
export interface ComponentElementResultListStruct {
    element_id?: number | string;
    image_id?: string;
    video_id?: string;
    element_name?: string;
    element_value?: string;
    element_type?: ReviewElementType;
    review_status?: ReviewResultStatus;
    element_reject_detail_info?: ComponentElementRejectDetailInfoListStruct[];
}
