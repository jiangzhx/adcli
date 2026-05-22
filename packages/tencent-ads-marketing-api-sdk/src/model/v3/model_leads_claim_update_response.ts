// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_claim_update_response.go
// Do not edit manually.

import type { ApiErrorStruct, LeadsClaimUpdateResponseData } from "../v3/index";

export interface LeadsClaimUpdateResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: LeadsClaimUpdateResponseData;
}

