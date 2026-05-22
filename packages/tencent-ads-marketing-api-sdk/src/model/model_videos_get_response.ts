// Generated from tencentad/marketing-api-go-sdk pkg/model/model_videos_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, VideosGetResponseData } from "../model/index";

export interface VideosGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: VideosGetResponseData;
}

