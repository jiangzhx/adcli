import type { ApiErrorStruct, OfficialLandingPageComponentAddResponseData } from "../v3/index";
export interface OfficialLandingPageComponentAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageComponentAddResponseData;
}
