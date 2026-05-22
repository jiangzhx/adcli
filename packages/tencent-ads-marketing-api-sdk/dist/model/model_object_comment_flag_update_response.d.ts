import type { ApiErrorStruct } from "../model/index";
export interface ObjectCommentFlagUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
