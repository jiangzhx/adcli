// Generated from tencentad/marketing-api-go-sdk pkg/model/model_game_feature_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, GameFeatureGetResponseData } from "../model/index";

export interface GameFeatureGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: GameFeatureGetResponseData;
}

