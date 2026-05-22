// Generated from tencentad/marketing-api-go-sdk pkg/model/model_union_position_packages_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, UnionPositionPackagesUpdateResponseData } from "../model/index";

export interface UnionPositionPackagesUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UnionPositionPackagesUpdateResponseData;
}

