import type { ApiErrorStruct, WatermarksGetResponseData } from "../v3/index";
export interface WatermarksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WatermarksGetResponseData;
}
