import type { ApiErrorStruct, ComponentElementUrgeReviewAddResponseData } from "../v3/index";
export interface ComponentElementUrgeReviewAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentElementUrgeReviewAddResponseData;
}
