import type { ApiErrorStruct, UnionPositionPackagesUpdateResponseData } from "../models";
export interface UnionPositionPackagesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UnionPositionPackagesUpdateResponseData;
}
