// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DpaEbpClueProductDeleteV30AccountType, DpaEbpClueProductDeleteV30RequestStoreIdAndOuterId } from "../models";

export interface DpaEbpClueProductDeleteV30Request {
  account_id: number;
  account_type: DpaEbpClueProductDeleteV30AccountType;
  product_ids?: number[];
  store_id_and_outer_id?: DpaEbpClueProductDeleteV30RequestStoreIdAndOuterId;
}

