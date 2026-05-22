import type { ApiErrorStruct, ReviewElementPrereviewResultsGetResponseData } from "../models";
export interface ReviewElementPrereviewResultsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReviewElementPrereviewResultsGetResponseData;
}
