import type { ApiErrorStruct } from "../models";
export interface RtatargetDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
