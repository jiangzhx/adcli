// Generated from tencentad/marketing-api-go-sdk pkg/model/model_campaigns_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, CampaignsGetResponseData } from "../model/index";

export interface CampaignsGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: CampaignsGetResponseData;
}

