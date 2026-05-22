import type { ApiErrorStruct, ComponentElementUrgeReviewGetResponseData } from "../models";
export interface ComponentElementUrgeReviewGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentElementUrgeReviewGetResponseData;
}
