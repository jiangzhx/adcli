import type { ApiErrorStruct, GameFeatureV6AddResponseData } from "../models";
export interface GameFeatureV6AddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureV6AddResponseData;
}
