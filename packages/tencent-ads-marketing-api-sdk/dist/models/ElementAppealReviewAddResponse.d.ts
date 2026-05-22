import type { ApiErrorStruct } from "../models";
export interface ElementAppealReviewAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
