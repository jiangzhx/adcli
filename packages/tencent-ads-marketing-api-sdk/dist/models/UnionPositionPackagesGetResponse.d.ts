import type { ApiErrorStruct, UnionPositionPackagesGetResponseData } from "../models";
export interface UnionPositionPackagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: UnionPositionPackagesGetResponseData;
}
