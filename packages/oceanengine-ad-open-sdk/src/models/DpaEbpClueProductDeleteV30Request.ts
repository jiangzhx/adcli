// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpClueProductDeleteV30AccountType, DpaEbpClueProductDeleteV30RequestStoreIdAndOuterId } from "../models";

export interface DpaEbpClueProductDeleteV30Request {
  account_id: number | string;
  account_type: DpaEbpClueProductDeleteV30AccountType;
  product_ids?: number | string[];
  store_id_and_outer_id?: DpaEbpClueProductDeleteV30RequestStoreIdAndOuterId;
}

