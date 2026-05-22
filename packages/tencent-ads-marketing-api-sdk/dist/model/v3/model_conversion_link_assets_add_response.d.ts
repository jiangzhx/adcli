import type { ApiErrorStruct, ConversionLinkAssetsAddResponseData } from "../v3/index";
export interface ConversionLinkAssetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionLinkAssetsAddResponseData;
}
