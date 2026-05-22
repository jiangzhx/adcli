// Generated from oceanengine/ad_open_sdk_go models/model_dpa_product_status_batch_update_v2_request.go
// Do not edit manually.

import type { DpaProductStatusBatchUpdateV2OptStatus } from "../models/index";

export interface DpaProductStatusBatchUpdateV2Request {
  advertiser_id: number | string;
  opt_status: DpaProductStatusBatchUpdateV2OptStatus;
  platform_id: number | string;
  product_ids: (number | string)[];
}

