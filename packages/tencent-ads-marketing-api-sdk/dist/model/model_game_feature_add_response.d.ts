import type { ApiErrorStruct, GameFeatureAddResponseData } from "../model/index";
export interface GameFeatureAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureAddResponseData;
}
