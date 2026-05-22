import type { ApiErrorStruct, GameFeatureGetResponseData } from "../model/index";
export interface GameFeatureGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureGetResponseData;
}
