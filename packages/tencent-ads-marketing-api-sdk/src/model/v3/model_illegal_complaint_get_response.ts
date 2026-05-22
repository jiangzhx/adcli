// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_illegal_complaint_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, IllegalComplaintGetResponseData } from "../v3/index";

export interface IllegalComplaintGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: IllegalComplaintGetResponseData;
}

