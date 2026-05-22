import type { ApiErrorStruct, OfficialLandingPageComponentAddResponseData } from "../models";
export interface OfficialLandingPageComponentAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageComponentAddResponseData;
}
