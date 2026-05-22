import type { ApiErrorStruct, ConversionLinkAssetAvailableGetResponseData } from "../v3/index";
export interface ConversionLinkAssetAvailableGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionLinkAssetAvailableGetResponseData;
}
