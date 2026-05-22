// Generated from tencentad/marketing-api-go-sdk pkg/model/model_game_feature_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, GameFeatureAddResponseData } from "../model/index";

export interface GameFeatureAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: GameFeatureAddResponseData;
}

