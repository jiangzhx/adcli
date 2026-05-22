import type { ApiErrorStruct } from "../v3/index";
export interface RtatargetAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
