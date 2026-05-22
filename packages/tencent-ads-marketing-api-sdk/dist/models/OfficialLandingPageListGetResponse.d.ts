import type { ApiErrorStruct, OfficialLandingPageListGetResponseData } from "../models";
export interface OfficialLandingPageListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageListGetResponseData;
}
