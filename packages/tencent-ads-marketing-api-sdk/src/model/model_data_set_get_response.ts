// Generated from tencentad/marketing-api-go-sdk pkg/model/model_data_set_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, DataSetGetResponseData } from "../model/index";

export interface DataSetGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: DataSetGetResponseData;
}

