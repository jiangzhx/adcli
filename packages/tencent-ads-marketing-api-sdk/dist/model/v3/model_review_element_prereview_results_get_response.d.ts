import type { ApiErrorStruct, ReviewElementPrereviewResultsGetResponseData } from "../v3/index";
export interface ReviewElementPrereviewResultsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReviewElementPrereviewResultsGetResponseData;
}
