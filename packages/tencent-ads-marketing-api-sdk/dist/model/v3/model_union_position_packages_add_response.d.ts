import type { ApiErrorStruct, UnionPositionPackagesAddResponseData } from "../v3/index";
export interface UnionPositionPackagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UnionPositionPackagesAddResponseData;
}
