// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { LeadsAddInfoStruct, LeadsMatchType } from "../models";

export interface LeadsAddRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_info_list?: LeadsAddInfoStruct[];
}

