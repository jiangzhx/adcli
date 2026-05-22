// Generated from tencentad/marketing-api-go-sdk pkg/model/model_data_set_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, DataSetAddResponseData } from "../model/index";

export interface DataSetAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: DataSetAddResponseData;
}

