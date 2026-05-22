import type { ApiErrorStruct, OauthTokenResponseData } from "../model/index";
export interface OauthTokenResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OauthTokenResponseData;
}
