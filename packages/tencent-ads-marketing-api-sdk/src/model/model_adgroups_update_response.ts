// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adgroups_update_response.go
// Do not edit manually.

import type { AdgroupsUpdateResponseData, ApiErrorStruct } from "../model/index";

export interface AdgroupsUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdgroupsUpdateResponseData;
}

