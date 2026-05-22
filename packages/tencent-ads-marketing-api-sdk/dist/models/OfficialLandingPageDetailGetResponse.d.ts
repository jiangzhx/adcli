import type { ApiErrorStruct, OfficialLandingPageDetailGetResponseData } from "../models";
export interface OfficialLandingPageDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OfficialLandingPageDetailGetResponseData;
}
