import type { ApiErrorStruct } from "../model/index";
export interface PropertyFilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
