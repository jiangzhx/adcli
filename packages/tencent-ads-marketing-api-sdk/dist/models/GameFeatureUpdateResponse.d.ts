import type { ApiErrorStruct, GameFeatureUpdateResponseData } from "../models";
export interface GameFeatureUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureUpdateResponseData;
}
