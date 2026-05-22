// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_account_version_get_response.go
// Do not edit manually.

import type { AccountVersionGetResponseData, ApiErrorStruct } from "../v3/index";

export interface AccountVersionGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AccountVersionGetResponseData;
}

