// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_videos_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, VideosUpdateResponseData } from "../v3/index";

export interface VideosUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: VideosUpdateResponseData;
}

