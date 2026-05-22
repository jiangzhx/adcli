import type { ApiErrorStruct } from "../models";
export interface ObjectCommentFlagUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
