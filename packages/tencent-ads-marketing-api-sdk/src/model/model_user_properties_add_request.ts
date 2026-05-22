// Generated from tencentad/marketing-api-go-sdk pkg/model/model_user_properties_add_request.go
// Do not edit manually.

import type { UserPropertiesAddProperty } from "../model/index";

export interface UserPropertiesAddRequest {
  account_id?: number | string;
  user_property_set_id?: number | string;
  wechat_app_id?: string;
  property?: UserPropertiesAddProperty[];
}

