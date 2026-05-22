// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_user_action_sets_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, UserActionSetsAddResponseData } from "../v3/index";

export interface UserActionSetsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UserActionSetsAddResponseData;
}

