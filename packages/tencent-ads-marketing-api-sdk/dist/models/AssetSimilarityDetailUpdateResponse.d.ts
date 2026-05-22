import type { ApiErrorStruct, AssetSimilarityDetailUpdateResponseData } from "../models";
export interface AssetSimilarityDetailUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetSimilarityDetailUpdateResponseData;
}
