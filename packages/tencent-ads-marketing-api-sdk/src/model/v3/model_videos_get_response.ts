// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_videos_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, VideosGetResponseData } from "../v3/index";

export interface VideosGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: VideosGetResponseData;
}

