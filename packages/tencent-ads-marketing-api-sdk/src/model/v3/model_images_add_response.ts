// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_images_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ImagesAddResponseData } from "../v3/index";

export interface ImagesAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ImagesAddResponseData;
}

