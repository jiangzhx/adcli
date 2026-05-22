import type { ApiErrorStruct, UnionPositionPackagesAddResponseData } from "../models";
export interface UnionPositionPackagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UnionPositionPackagesAddResponseData;
}
