import type { ApiErrorStruct, UnionPositionPackagesUpdateResponseData } from "../model/index";
export interface UnionPositionPackagesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UnionPositionPackagesUpdateResponseData;
}
