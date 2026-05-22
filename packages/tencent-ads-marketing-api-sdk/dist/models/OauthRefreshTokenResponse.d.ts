import type { ApiErrorStruct, OauthRefreshTokenResponseData } from "../models";
export interface OauthRefreshTokenResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OauthRefreshTokenResponseData;
}
