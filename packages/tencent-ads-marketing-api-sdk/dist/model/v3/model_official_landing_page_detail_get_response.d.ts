import type { ApiErrorStruct, OfficialLandingPageDetailGetResponseData } from "../v3/index";
export interface OfficialLandingPageDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageDetailGetResponseData;
}
