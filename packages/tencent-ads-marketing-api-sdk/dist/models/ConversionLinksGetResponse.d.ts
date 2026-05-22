import type { ApiErrorStruct, ConversionLinksGetResponseData } from "../models";
export interface ConversionLinksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionLinksGetResponseData;
}
