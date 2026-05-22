// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_rta_info_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, RtaInfoGetResponseData } from "../v3/index";

export interface RtaInfoGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: RtaInfoGetResponseData;
}

