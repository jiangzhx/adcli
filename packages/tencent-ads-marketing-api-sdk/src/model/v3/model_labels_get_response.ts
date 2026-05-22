// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_labels_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, LabelsGetResponseData } from "../v3/index";

export interface LabelsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LabelsGetResponseData;
}

