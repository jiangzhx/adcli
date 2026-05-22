import type { AdsUpdateConfiguredStatusResponseData, ApiErrorStruct } from "../models";
export interface AdsUpdateConfiguredStatusResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsUpdateConfiguredStatusResponseData;
}
