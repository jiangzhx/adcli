// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_punishment_config_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, PunishmentConfigGetResponseData } from "../v3/index";

export interface PunishmentConfigGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: PunishmentConfigGetResponseData;
}

