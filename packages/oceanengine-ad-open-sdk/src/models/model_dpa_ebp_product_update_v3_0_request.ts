// 由 oceanengine/ad_open_sdk_go models/model_dpa_ebp_product_update_v3_0_request.go 生成
// 不要手动编辑。

import type { DpaEbpProductUpdateV30AccountType, DpaEbpProductUpdateV30RequestProductInfo } from "../models/index";

export interface DpaEbpProductUpdateV30Request {
  account_id: number | string;
  account_type: DpaEbpProductUpdateV30AccountType;
  platform_id: number | string;
  product_id: number | string;
  product_info: DpaEbpProductUpdateV30RequestProductInfo;
}

