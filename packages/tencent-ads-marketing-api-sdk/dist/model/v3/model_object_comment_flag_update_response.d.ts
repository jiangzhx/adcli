import type { ApiErrorStruct } from "../v3/index";
export interface ObjectCommentFlagUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
