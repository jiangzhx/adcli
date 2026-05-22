import type { OauthAccountRoleType, OauthAccountType, RoleType } from "../models";
export interface AuthorizerStruct {
    account_uin?: number;
    account_id?: number | string;
    scope_list?: string[];
    wechat_account_id?: string;
    account_role_type?: OauthAccountRoleType;
    account_type?: OauthAccountType;
    role_type?: RoleType;
}
