import type { ApiErrorStruct, OfficialLandingPageListGetResponseData } from "../v3/index";
export interface OfficialLandingPageListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageListGetResponseData;
}
