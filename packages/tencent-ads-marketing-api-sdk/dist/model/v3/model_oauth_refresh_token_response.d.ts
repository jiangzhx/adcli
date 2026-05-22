import type { ApiErrorStruct, OauthRefreshTokenResponseData } from "../v3/index";
export interface OauthRefreshTokenResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OauthRefreshTokenResponseData;
}
