// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_images_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, ImagesUpdateResponseData } from "../v3/index";

export interface ImagesUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ImagesUpdateResponseData;
}

