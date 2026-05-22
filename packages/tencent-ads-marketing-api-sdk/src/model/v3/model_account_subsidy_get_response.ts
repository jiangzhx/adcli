// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_account_subsidy_get_response.go
// Do not edit manually.

import type { AccountSubsidyGetResponseData, ApiErrorStruct } from "../v3/index";

export interface AccountSubsidyGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AccountSubsidyGetResponseData;
}

