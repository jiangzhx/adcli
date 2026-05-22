import type { ApiErrorStruct, HourlyReportsGetResponseData } from "../v3/index";
export interface HourlyReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: HourlyReportsGetResponseData;
}
