// Generated from tencentad/marketing-api-go-sdk pkg/model/model_user_action_sets_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, UserActionSetsGetResponseData } from "../model/index";

export interface UserActionSetsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UserActionSetsGetResponseData;
}

