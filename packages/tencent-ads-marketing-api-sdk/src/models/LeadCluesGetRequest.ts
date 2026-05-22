// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { FilteringStruct, TimeRange } from "../models";

export interface LeadCluesGetRequest {
  account_id?: number | string;
  time_range?: TimeRange;
  filtering?: FilteringStruct[];
  page?: number;
  page_size?: number;
  last_search_after_values?: string[];
}

