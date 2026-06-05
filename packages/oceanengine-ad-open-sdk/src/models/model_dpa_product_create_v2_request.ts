// 由 oceanengine/ad_open_sdk_go models/model_dpa_product_create_v2_request.go 生成
// 不要手动编辑。

import type { DpaProductCreateV2RequestProductInfo } from "../models/index";

export interface DpaProductCreateV2Request {
  advertiser_id: number | string;
  platform_id: number | string;
  product_info: DpaProductCreateV2RequestProductInfo;
}

