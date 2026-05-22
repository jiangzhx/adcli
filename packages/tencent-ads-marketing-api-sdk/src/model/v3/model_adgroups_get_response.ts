// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_adgroups_get_response.go
// Do not edit manually.

import type { AdgroupsGetResponseData, ApiErrorStruct } from "../v3/index";

export interface AdgroupsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdgroupsGetResponseData;
}

