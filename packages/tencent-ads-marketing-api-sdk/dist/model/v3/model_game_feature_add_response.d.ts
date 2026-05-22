import type { ApiErrorStruct, GameFeatureAddResponseData } from "../v3/index";
export interface GameFeatureAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureAddResponseData;
}
