import type { ApiErrorStruct } from "../v3/index";
export interface IllegalComplaintAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
