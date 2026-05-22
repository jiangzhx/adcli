import type { ApiErrorStruct, ConversionLinksGetResponseData } from "../v3/index";
export interface ConversionLinksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionLinksGetResponseData;
}
