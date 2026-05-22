// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpProductStatusBatchUpdateV30AccountType, DpaEbpProductStatusBatchUpdateV30OptStatus } from "../models";

export interface DpaEbpProductStatusBatchUpdateV30Request {
  account_id: number;
  account_type: DpaEbpProductStatusBatchUpdateV30AccountType;
  opt_status: DpaEbpProductStatusBatchUpdateV30OptStatus;
  platform_id: number;
  product_ids: number[];
}

