import type { ApiErrorStruct, ReviewElementPrereviewResultsGetResponseData } from "../model/index";
export interface ReviewElementPrereviewResultsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReviewElementPrereviewResultsGetResponseData;
}
