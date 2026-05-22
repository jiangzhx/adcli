import type { ApiErrorStruct, ConversionLinkAssetsGetResponseData } from "../models";
export interface ConversionLinkAssetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionLinkAssetsGetResponseData;
}
