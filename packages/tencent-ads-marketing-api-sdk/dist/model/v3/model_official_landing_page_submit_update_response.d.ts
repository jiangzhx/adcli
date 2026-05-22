import type { ApiErrorStruct, OfficialLandingPageSubmitUpdateResponseData } from "../v3/index";
export interface OfficialLandingPageSubmitUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageSubmitUpdateResponseData;
}
