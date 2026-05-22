// Generated from tencentad/marketing-api-go-sdk pkg/model/model_labels_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LabelsGetResponseData } from "../model/index";

export interface LabelsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LabelsGetResponseData;
}

