// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { FilteringStruct } from "../models";

export interface BidwordGetRequest {
  account_id?: number | string;
  filtering?: FilteringStruct[];
  page?: number;
  page_size?: number;
  is_deleted?: boolean;
}

