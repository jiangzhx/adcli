// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_adgroups_add_response.go
// Do not edit manually.

import type { AdgroupsAddResponseData, ApiErrorStruct } from "../v3/index";

export interface AdgroupsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: AdgroupsAddResponseData;
}

