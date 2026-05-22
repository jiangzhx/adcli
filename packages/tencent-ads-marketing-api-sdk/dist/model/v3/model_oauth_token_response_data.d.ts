import type { AuthorizerStruct } from "../v3/index";
export interface OauthTokenResponseData {
    authorizer_info?: AuthorizerStruct;
    access_token?: string;
    refresh_token?: string;
    access_token_expires_in?: number;
    refresh_token_expires_in?: number;
}
