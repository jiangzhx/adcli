// Generated from oceanengine/ad_open_sdk_go models/model_dpa_ebp_clue_product_delete_v3_0_request.go
// Do not edit manually.

import type { DpaEbpClueProductDeleteV30AccountType, DpaEbpClueProductDeleteV30RequestStoreIdAndOuterId } from "../models/index";

export interface DpaEbpClueProductDeleteV30Request {
  account_id: number | string;
  account_type: DpaEbpClueProductDeleteV30AccountType;
  product_ids?: (number | string)[];
  store_id_and_outer_id?: DpaEbpClueProductDeleteV30RequestStoreIdAndOuterId;
}

