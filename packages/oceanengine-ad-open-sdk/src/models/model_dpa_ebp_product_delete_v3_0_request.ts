// 由 oceanengine/ad_open_sdk_go models/model_dpa_ebp_product_delete_v3_0_request.go 生成
// 不要手动编辑。

import type { DpaEbpProductDeleteV30AccountType } from "../models/index";

export interface DpaEbpProductDeleteV30Request {
  account_id: number | string;
  account_type: DpaEbpProductDeleteV30AccountType;
  platform_id: number | string;
  product_id: number | string;
}

