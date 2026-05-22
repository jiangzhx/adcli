import type { ApiErrorStruct, CustomFeaturesGetResponseData } from "../models";
export interface CustomFeaturesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomFeaturesGetResponseData;
}
