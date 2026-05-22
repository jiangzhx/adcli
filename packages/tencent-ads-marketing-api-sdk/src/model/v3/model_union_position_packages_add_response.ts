// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_union_position_packages_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, UnionPositionPackagesAddResponseData } from "../v3/index";

export interface UnionPositionPackagesAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UnionPositionPackagesAddResponseData;
}

