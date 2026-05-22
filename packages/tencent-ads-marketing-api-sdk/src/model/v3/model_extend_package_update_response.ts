// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_extend_package_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, ExtendPackageUpdateResponseData } from "../v3/index";

export interface ExtendPackageUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ExtendPackageUpdateResponseData;
}

