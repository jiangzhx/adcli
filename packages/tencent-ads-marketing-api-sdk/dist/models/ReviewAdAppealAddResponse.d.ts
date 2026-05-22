import type { ApiErrorStruct } from "../models";
export interface ReviewAdAppealAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
