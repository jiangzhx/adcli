import type { ApiErrorStruct } from "../model/index";
export interface ReviewAdAppealAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
