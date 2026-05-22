// Generated from tencentad/marketing-api-go-sdk pkg/model/model_programmed_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProgrammedAddResponseData } from "../model/index";

export interface ProgrammedAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProgrammedAddResponseData;
}

