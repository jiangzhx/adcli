import type { ApiErrorStruct } from "../model/index";
export interface CustomTagsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
