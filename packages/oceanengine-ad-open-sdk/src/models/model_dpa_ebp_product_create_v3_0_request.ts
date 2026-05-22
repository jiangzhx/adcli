// Generated from oceanengine/ad_open_sdk_go models/model_dpa_ebp_product_create_v3_0_request.go
// Do not edit manually.

import type { DpaEbpProductCreateV30AccountType, DpaEbpProductCreateV30RequestProductInfo } from "../models/index";

export interface DpaEbpProductCreateV30Request {
  account_id: number | string;
  account_type: DpaEbpProductCreateV30AccountType;
  platform_id: number | string;
  product_info: DpaEbpProductCreateV30RequestProductInfo;
}

