import type { ApiErrorStruct, OfficialLandingPageSubmitUpdateResponseData } from "../models";
export interface OfficialLandingPageSubmitUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageSubmitUpdateResponseData;
}
