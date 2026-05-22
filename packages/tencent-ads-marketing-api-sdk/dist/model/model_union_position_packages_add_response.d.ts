import type { ApiErrorStruct, UnionPositionPackagesAddResponseData } from "../model/index";
export interface UnionPositionPackagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UnionPositionPackagesAddResponseData;
}
