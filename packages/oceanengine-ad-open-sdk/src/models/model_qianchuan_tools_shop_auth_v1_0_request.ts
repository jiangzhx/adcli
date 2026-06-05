// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_tools_shop_auth_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanToolsShopAuthV10ShopAuthTimeType } from "../models/index";

export interface QianchuanToolsShopAuthV10Request {
  advertiser_id: number | string;
  end_time?: string;
  shop_auth_time_type: QianchuanToolsShopAuthV10ShopAuthTimeType;
  shop_id: number | string;
}

