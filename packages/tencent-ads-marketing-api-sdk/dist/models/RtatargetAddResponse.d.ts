import type { ApiErrorStruct } from "../models";
export interface RtatargetAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
