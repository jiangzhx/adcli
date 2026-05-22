import type { ApiErrorStruct, ConversionLinkAssetsUpdateResponseData } from "../v3/index";
export interface ConversionLinkAssetsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionLinkAssetsUpdateResponseData;
}
