import type { ApiErrorStruct } from "../models";
export interface UserActionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
