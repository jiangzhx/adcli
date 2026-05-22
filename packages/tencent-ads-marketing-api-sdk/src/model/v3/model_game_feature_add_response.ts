// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_game_feature_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, GameFeatureAddResponseData } from "../v3/index";

export interface GameFeatureAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: GameFeatureAddResponseData;
}

