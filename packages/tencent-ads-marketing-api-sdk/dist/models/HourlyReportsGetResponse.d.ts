import type { ApiErrorStruct, HourlyReportsGetResponseData } from "../models";
export interface HourlyReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: HourlyReportsGetResponseData;
}
