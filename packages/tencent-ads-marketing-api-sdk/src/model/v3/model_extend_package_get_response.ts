// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_extend_package_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ExtendPackageGetResponseData } from "../v3/index";

export interface ExtendPackageGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ExtendPackageGetResponseData;
}

