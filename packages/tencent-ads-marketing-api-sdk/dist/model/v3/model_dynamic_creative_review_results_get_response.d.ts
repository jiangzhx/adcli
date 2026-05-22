import type { ApiErrorStruct, DynamicCreativeReviewResultsGetResponseData } from "../v3/index";
export interface DynamicCreativeReviewResultsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativeReviewResultsGetResponseData;
}
