// Generated from tencentad/marketing-api-go-sdk pkg/model/model_game_feature_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, GameFeatureUpdateResponseData } from "../model/index";

export interface GameFeatureUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: GameFeatureUpdateResponseData;
}

