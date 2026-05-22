// Generated from tencentad/marketing-api-go-sdk pkg/model/model_videos_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, VideosAddResponseData } from "../model/index";

export interface VideosAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: VideosAddResponseData;
}

