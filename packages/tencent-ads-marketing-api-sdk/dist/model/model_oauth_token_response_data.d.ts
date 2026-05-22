import type { AuthorizerStruct } from "../model/index";
export interface OauthTokenResponseData {
    authorizer_info?: AuthorizerStruct;
    access_token?: string;
    refresh_token?: string;
    access_token_expires_in?: number;
    refresh_token_expires_in?: number;
}
