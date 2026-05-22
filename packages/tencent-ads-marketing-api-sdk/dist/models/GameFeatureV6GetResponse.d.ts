import type { ApiErrorStruct, GameFeatureV6GetResponseData } from "../models";
export interface GameFeatureV6GetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GameFeatureV6GetResponseData;
}
