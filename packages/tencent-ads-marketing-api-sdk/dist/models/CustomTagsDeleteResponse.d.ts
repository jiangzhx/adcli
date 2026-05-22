import type { ApiErrorStruct } from "../models";
export interface CustomTagsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
