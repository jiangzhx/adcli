// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanProductAvailableGetV10DataProductListChannelType, QianchuanProductAvailableGetV10DataProductListTags, QianchuanProductAvailableGetV10ResponseDataProductListInnerImgListInner } from "../models";

export interface QianchuanProductAvailableGetV10ResponseDataProductListInner {
  benefits?: string[];
  category_name?: string;
  channel_id?: number;
  channel_type?: QianchuanProductAvailableGetV10DataProductListChannelType;
  discount_higher_price?: number;
  discount_lower_price?: number;
  discount_price?: number;
  first_on_shelf_time?: number;
  id?: number;
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

