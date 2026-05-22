// Generated from oceanengine/ad_open_sdk_go models/model_dpa_clue_product_delete_v2_request.go
// Do not edit manually.

import type { DpaClueProductDeleteV2RequestStoreIdAndOuterId } from "../models/index";

export interface DpaClueProductDeleteV2Request {
  advertiser_id: number | string;
  product_ids?: (number | string)[];
  store_id_and_outer_id?: DpaClueProductDeleteV2RequestStoreIdAndOuterId;
}

