import type { ApiErrorStruct, GameFeatureGetResponseData } from "../models";
export interface GameFeatureGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureGetResponseData;
}
