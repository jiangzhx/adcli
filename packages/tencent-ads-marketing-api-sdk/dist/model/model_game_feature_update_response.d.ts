import type { ApiErrorStruct, GameFeatureUpdateResponseData } from "../model/index";
export interface GameFeatureUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureUpdateResponseData;
}
