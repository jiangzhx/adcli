// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_authorizer_struct.go
// Do not edit manually.

import type { OauthAccountRoleType, OauthAccountType, RoleType } from "../v3/index";

export interface AuthorizerStruct {
  account_uin?: number;
  account_id?: number | string;
  scope_list?: string[];
  wechat_account_id?: string;
  account_role_type?: OauthAccountRoleType;
  account_type?: OauthAccountType;
  role_type?: RoleType;
}

