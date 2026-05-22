// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { LeadsMatchType, OuterLeadsStatusInfoStruct } from "../models";

export interface LeadsStatusUpdateRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_conversion_status_list?: OuterLeadsStatusInfoStruct[];
}

