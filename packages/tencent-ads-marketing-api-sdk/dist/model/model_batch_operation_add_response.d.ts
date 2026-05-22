import type { ApiErrorStruct } from "../model/index";
export interface BatchOperationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
