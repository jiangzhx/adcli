// Generated from tencentad/marketing-api-go-sdk pkg/model/model_custom_audiences_add_request.go
// Do not edit manually.

import type { AudienceSpec, AudienceType, DataPlatform } from "../model/index";

export interface CustomAudiencesAddRequest {
  account_id?: number | string;
  name?: string;
  type?: AudienceType;
  description?: string;
  cooperated?: boolean;
  audience_spec?: AudienceSpec;
  platform?: DataPlatform;
  external_audience_id?: string;
}

