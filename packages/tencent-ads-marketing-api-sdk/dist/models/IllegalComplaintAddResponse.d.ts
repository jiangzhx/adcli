import type { ApiErrorStruct } from "../models";
export interface IllegalComplaintAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
