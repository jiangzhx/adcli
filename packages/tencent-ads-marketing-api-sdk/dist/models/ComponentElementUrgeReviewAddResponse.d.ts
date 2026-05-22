import type { ApiErrorStruct, ComponentElementUrgeReviewAddResponseData } from "../models";
export interface ComponentElementUrgeReviewAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentElementUrgeReviewAddResponseData;
}
