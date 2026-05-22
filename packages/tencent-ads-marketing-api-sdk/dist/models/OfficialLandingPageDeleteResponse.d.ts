import type { ApiErrorStruct, OfficialLandingPageDeleteResponseData } from "../models";
export interface OfficialLandingPageDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageDeleteResponseData;
}
