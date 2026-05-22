// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_videos_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, VideosAddResponseData } from "../v3/index";

export interface VideosAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: VideosAddResponseData;
}

