import type { ApiErrorStruct, WatermarksGetResponseData } from "../models";
export interface WatermarksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WatermarksGetResponseData;
}
