// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_programmed_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProgrammedGetResponseData } from "../v3/index";

export interface ProgrammedGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProgrammedGetResponseData;
}

