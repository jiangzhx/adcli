import type { ApiErrorStruct, CustomFeaturesGetResponseData } from "../model/index";
export interface CustomFeaturesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomFeaturesGetResponseData;
}
