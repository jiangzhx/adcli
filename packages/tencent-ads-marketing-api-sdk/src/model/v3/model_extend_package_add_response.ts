// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_extend_package_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ExtendPackageAddResponseData } from "../v3/index";

export interface ExtendPackageAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ExtendPackageAddResponseData;
}

