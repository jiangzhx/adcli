// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_game_feature_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, GameFeatureGetResponseData } from "../v3/index";

export interface GameFeatureGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: GameFeatureGetResponseData;
}

