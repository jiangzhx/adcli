// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_punish_detail_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, PunishDetailGetResponseData } from "../v3/index";

export interface PunishDetailGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PunishDetailGetResponseData;
}

