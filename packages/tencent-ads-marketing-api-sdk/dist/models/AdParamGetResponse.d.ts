import type { AdParamGetResponseData, ApiErrorStruct } from "../models";
export interface AdParamGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdParamGetResponseData;
}
