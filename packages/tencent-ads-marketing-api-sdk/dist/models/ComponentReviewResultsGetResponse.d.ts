import type { ApiErrorStruct, ComponentReviewResultsGetResponseData } from "../models";
export interface ComponentReviewResultsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentReviewResultsGetResponseData;
}
