import type { ApiErrorStruct, ElementAppealReviewGetResponseData } from "../v3/index";
export interface ElementAppealReviewGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ElementAppealReviewGetResponseData;
}
