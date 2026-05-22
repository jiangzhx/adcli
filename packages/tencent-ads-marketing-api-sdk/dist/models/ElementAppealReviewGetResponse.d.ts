import type { ApiErrorStruct, ElementAppealReviewGetResponseData } from "../models";
export interface ElementAppealReviewGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ElementAppealReviewGetResponseData;
}
