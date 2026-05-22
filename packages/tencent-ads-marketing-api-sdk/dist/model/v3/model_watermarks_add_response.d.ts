import type { ApiErrorStruct, WatermarksAddResponseData } from "../v3/index";
export interface WatermarksAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WatermarksAddResponseData;
}
