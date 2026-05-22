import type { ApiErrorStruct, OfficialLandingPageDeleteResponseData } from "../v3/index";
export interface OfficialLandingPageDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageDeleteResponseData;
}
