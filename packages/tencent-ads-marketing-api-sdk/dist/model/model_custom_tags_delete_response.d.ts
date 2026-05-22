import type { ApiErrorStruct } from "../model/index";
export interface CustomTagsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
