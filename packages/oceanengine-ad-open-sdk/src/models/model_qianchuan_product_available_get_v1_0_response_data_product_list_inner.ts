// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_product_available_get_v1_0_response_data_product_list_inner.go
// Do not edit manually.

import type { QianchuanProductAvailableGetV10DataProductListChannelType, QianchuanProductAvailableGetV10DataProductListTags, QianchuanProductAvailableGetV10ResponseDataProductListInnerImgListInner } from "../models/index";

export interface QianchuanProductAvailableGetV10ResponseDataProductListInner {
  benefits?: string[];
  category_name?: string;
  channel_id?: number | string;
  channel_type?: QianchuanProductAvailableGetV10DataProductListChannelType;
  discount_higher_price?: number;
  discount_lower_price?: number;
  discount_price?: number;
  first_on_shelf_time?: number;
  id?: number | string;
  img?: string;
  img_list?: QianchuanProductAvailableGetV10ResponseDataProductListInnerImgListInner[];
  inventory?: number;
  market_price?: number;
  name?: string;
  product_rate?: number;
  recommend_reasons?: string[];
  sale_time?: string;
  sell_num?: number;
  support_product_new_open?: boolean;
  tags?: QianchuanProductAvailableGetV10DataProductListTags;
}

