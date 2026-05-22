// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_union_position_packages_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, UnionPositionPackagesUpdateResponseData } from "../v3/index";

export interface UnionPositionPackagesUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UnionPositionPackagesUpdateResponseData;
}

