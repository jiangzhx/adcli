// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_user_action_sets_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, UserActionSetsGetResponseData } from "../v3/index";

export interface UserActionSetsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UserActionSetsGetResponseData;
}

