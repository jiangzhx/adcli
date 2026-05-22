import type { ApiErrorStruct, OauthTokenResponseData } from "../models";
export interface OauthTokenResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OauthTokenResponseData;
}
