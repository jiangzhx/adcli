import type { ApiErrorStruct, DynamicCreativeReviewResultsGetResponseData } from "../models";
export interface DynamicCreativeReviewResultsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativeReviewResultsGetResponseData;
}
