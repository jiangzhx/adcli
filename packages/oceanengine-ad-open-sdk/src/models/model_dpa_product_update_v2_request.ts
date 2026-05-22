// Generated from oceanengine/ad_open_sdk_go models/model_dpa_product_update_v2_request.go
// Do not edit manually.

import type { DpaProductUpdateV2RequestProductInfo } from "../models/index";

export interface DpaProductUpdateV2Request {
  advertiser_id: number | string;
  platform_id: number | string;
  product_id: number | string;
  product_info: DpaProductUpdateV2RequestProductInfo;
}

