import type { ApiErrorStruct, GameFeatureAddResponseData } from "../models";
export interface GameFeatureAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureAddResponseData;
}
