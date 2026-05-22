import type { ApiErrorStruct, UnionPositionPackagesGetResponseData } from "../v3/index";
export interface UnionPositionPackagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UnionPositionPackagesGetResponseData;
}
