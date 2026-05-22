// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_punishment_query_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, PunishmentQueryGetResponseData } from "../v3/index";

export interface PunishmentQueryGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PunishmentQueryGetResponseData;
}

