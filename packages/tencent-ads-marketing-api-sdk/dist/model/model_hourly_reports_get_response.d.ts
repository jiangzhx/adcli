import type { ApiErrorStruct, HourlyReportsGetResponseData } from "../model/index";
export interface HourlyReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: HourlyReportsGetResponseData;
}
