// Generated from tencentad/marketing-api-go-sdk pkg/model/model_programmed_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProgrammedUpdateResponseData } from "../model/index";

export interface ProgrammedUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProgrammedUpdateResponseData;
}

