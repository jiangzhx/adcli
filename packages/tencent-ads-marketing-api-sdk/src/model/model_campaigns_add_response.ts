// Generated from tencentad/marketing-api-go-sdk pkg/model/model_campaigns_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, CampaignsAddResponseData } from "../model/index";

export interface CampaignsAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: CampaignsAddResponseData;
}

