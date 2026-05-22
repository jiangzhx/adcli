import type { ApiErrorStruct, WatermarksAddResponseData } from "../models";
export interface WatermarksAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WatermarksAddResponseData;
}
