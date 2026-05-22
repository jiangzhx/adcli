import type { ApiErrorStruct, ConversionLinkAssetsAddResponseData } from "../models";
export interface ConversionLinkAssetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionLinkAssetsAddResponseData;
}
