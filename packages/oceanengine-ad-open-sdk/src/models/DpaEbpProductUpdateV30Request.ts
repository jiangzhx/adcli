// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpProductUpdateV30AccountType, DpaEbpProductUpdateV30RequestProductInfo } from "../models";

export interface DpaEbpProductUpdateV30Request {
  account_id: number | string;
  account_type: DpaEbpProductUpdateV30AccountType;
  platform_id: number | string;
  product_id: number | string;
  product_info: DpaEbpProductUpdateV30RequestProductInfo;
}

