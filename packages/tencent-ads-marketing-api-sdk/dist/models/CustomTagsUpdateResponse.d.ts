import type { ApiErrorStruct } from "../models";
export interface CustomTagsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
