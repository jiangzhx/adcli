import type { ApiErrorStruct, AssetSimilarityDetailGetResponseData } from "../models";
export interface AssetSimilarityDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetSimilarityDetailGetResponseData;
}
