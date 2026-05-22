// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DpaProductStatusBatchUpdateV2OptStatus } from "../models";

export interface DpaProductStatusBatchUpdateV2Request {
  advertiser_id: number;
  opt_status: DpaProductStatusBatchUpdateV2OptStatus;
  platform_id: number;
  product_ids: number[];
}

