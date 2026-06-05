// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_detail_get_v1_0_response_data_product_info_inner.go 生成
// 不要手动编辑。

import type { QianchuanAdDetailGetV10DataProductInfoChannelType } from "../models/index";

export interface QianchuanAdDetailGetV10ResponseDataProductInfoInner {
  channel_id?: number | string;
  channel_type?: QianchuanAdDetailGetV10DataProductInfoChannelType;
  discount_higher_price?: number;
  discount_lower_price?: number;
  discount_price?: number;
  id?: number | string;
  img?: string;
  market_price?: number;
  name?: string;
}

