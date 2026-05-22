import type { ApiErrorStruct } from "../models";
export interface BatchOperationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
