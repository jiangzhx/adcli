// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_images_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ImagesGetResponseData } from "../v3/index";

export interface ImagesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ImagesGetResponseData;
}

