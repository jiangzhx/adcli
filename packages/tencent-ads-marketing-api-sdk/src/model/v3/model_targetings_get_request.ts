// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_targetings_get_request.go
// Do not edit manually.

import type { FilteringStruct } from "../v3/index";

export interface TargetingsGetRequest {
  account_id?: number | string;
  filtering?: FilteringStruct[];
  page?: number;
  page_size?: number;
}

