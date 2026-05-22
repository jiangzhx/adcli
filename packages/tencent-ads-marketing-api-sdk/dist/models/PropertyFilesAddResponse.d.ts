import type { ApiErrorStruct } from "../models";
export interface PropertyFilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
