// Generated from tencentad/marketing-api-go-sdk pkg/model/model_authorizer_struct.go
// Do not edit manually.

import type { AccountRoleType, AccountType, RoleType } from "../model/index";

export interface AuthorizerStruct {
  account_uin?: number;
  account_id?: number | string;
  scope_list?: string[];
  wechat_account_id?: string;
  account_role_type?: AccountRoleType;
  account_type?: AccountType;
  role_type?: RoleType;
}

