// 由 oceanengine/ad_open_sdk_go models/model_local_product_get_v3_0_response_data_products_inner.go 生成
// 不要手动编辑。

import type { LocalProductGetV30ResponseDataProductsInnerBindMarketPageInfosInner } from "../models/index";

export interface LocalProductGetV30ResponseDataProductsInner {
  applicable_poi_num?: number;
  bind_market_page_infos?: LocalProductGetV30ResponseDataProductsInnerBindMarketPageInfosInner[];
  price?: number;
  product_id?: number | string;
  product_name?: string;
  product_pics?: string;
}

