import type { ApiErrorStruct } from "../model/index";
export interface UserActionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
