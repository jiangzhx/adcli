// Generated from tencentad/marketing-api-go-sdk pkg/model/model_user_action_sets_add_request.go
// Do not edit manually.

import type { DataSourceType } from "../model/index";

export interface UserActionSetsAddRequest {
  account_id?: number | string;
  type?: DataSourceType;
  mobile_app_id?: number | string;
  wechat_app_id?: string;
  name?: string;
  description?: string;
  usages?: string[];
  enable_conversion_claim?: boolean;
}

