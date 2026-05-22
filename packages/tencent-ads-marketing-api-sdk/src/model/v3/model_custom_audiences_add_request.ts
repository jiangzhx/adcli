// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_custom_audiences_add_request.go
// Do not edit manually.

import type { AudienceSpec, AudienceType } from "../v3/index";

export interface CustomAudiencesAddRequest {
  account_id?: number | string;
  name?: string;
  type?: AudienceType;
  outer_audience_id?: string;
  description?: string;
  audience_spec?: AudienceSpec;
}

