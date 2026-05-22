// Generated from oceanengine/ad_open_sdk_go models/model_dpa_ebp_product_status_batch_update_v3_0_request.go
// Do not edit manually.

import type { DpaEbpProductStatusBatchUpdateV30AccountType, DpaEbpProductStatusBatchUpdateV30OptStatus } from "../models/index";

export interface DpaEbpProductStatusBatchUpdateV30Request {
  account_id: number | string;
  account_type: DpaEbpProductStatusBatchUpdateV30AccountType;
  opt_status: DpaEbpProductStatusBatchUpdateV30OptStatus;
  platform_id: number | string;
  product_ids: (number | string)[];
}

