import type { AdParamGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdParamGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdParamGetResponseData;
}
