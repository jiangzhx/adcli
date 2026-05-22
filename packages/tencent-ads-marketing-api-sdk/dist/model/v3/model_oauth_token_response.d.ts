import type { ApiErrorStruct, OauthTokenResponseData } from "../v3/index";
export interface OauthTokenResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OauthTokenResponseData;
}
