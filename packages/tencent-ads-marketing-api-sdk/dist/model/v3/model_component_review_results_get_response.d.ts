import type { ApiErrorStruct, ComponentReviewResultsGetResponseData } from "../v3/index";
export interface ComponentReviewResultsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComponentReviewResultsGetResponseData;
}
