import type { ApiErrorStruct, AssetSimilarityDetailUpdateResponseData } from "../v3/index";
export interface AssetSimilarityDetailUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetSimilarityDetailUpdateResponseData;
}
