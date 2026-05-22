import type { AdsUpdateConfiguredStatusResponseData, ApiErrorStruct } from "../model/index";
export interface AdsUpdateConfiguredStatusResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdsUpdateConfiguredStatusResponseData;
}
