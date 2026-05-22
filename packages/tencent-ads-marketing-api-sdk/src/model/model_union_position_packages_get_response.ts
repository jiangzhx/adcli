// Generated from tencentad/marketing-api-go-sdk pkg/model/model_union_position_packages_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, UnionPositionPackagesGetResponseData } from "../model/index";

export interface UnionPositionPackagesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UnionPositionPackagesGetResponseData;
}

