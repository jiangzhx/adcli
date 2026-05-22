// Generated from tencentad/marketing-api-go-sdk pkg/model/model_user_action_sets_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, UserActionSetsAddResponseData } from "../model/index";

export interface UserActionSetsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UserActionSetsAddResponseData;
}

