// Generated from tencentad/marketing-api-go-sdk pkg/model/model_targetings_add_request.go
// Do not edit manually.

import type { WriteTargetingSetting } from "../model/index";

export interface TargetingsAddRequest {
  targeting_name?: string;
  description?: string;
  account_id?: number | string;
  targeting?: WriteTargetingSetting;
}

