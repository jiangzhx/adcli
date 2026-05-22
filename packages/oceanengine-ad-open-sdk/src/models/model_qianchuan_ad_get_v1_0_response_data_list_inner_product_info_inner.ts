// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_get_v1_0_response_data_list_inner_product_info_inner.go
// Do not edit manually.

import type { QianchuanAdGetV10DataListProductInfoChannelType } from "../models/index";

export interface QianchuanAdGetV10ResponseDataListInnerProductInfoInner {
  channel_id?: number | string;
  channel_type?: QianchuanAdGetV10DataListProductInfoChannelType;
  discount_higher_price?: number;
  discount_lower_price?: number;
  discount_price?: number;
  id?: number | string;
  img?: string;
  market_price?: number;
  name?: string;
}

