import type { ApiErrorStruct } from "../models";
export interface UnionPositionPackagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
