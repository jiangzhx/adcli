import type { ApiErrorStruct, ComponentElementUrgeReviewGetResponseData } from "../v3/index";
export interface ComponentElementUrgeReviewGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentElementUrgeReviewGetResponseData;
}
