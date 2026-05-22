import type { ApiErrorStruct, GameFeatureGetResponseData } from "../v3/index";
export interface GameFeatureGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureGetResponseData;
}
