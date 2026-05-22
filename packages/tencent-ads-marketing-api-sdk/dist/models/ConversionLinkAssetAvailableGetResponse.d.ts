import type { ApiErrorStruct, ConversionLinkAssetAvailableGetResponseData } from "../models";
export interface ConversionLinkAssetAvailableGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionLinkAssetAvailableGetResponseData;
}
