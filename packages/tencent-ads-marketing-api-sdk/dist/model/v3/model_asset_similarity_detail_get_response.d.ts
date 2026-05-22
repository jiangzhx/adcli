import type { ApiErrorStruct, AssetSimilarityDetailGetResponseData } from "../v3/index";
export interface AssetSimilarityDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AssetSimilarityDetailGetResponseData;
}
