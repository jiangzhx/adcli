// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeProductAvailableGetV10DataProductListChannelType } from "../models";

export interface QianchuanAwemeProductAvailableGetV10ResponseDataProductListInner {
  category_name?: string;
  channel_id?: number | string;
  channel_type?: QianchuanAwemeProductAvailableGetV10DataProductListChannelType;
  discount_higher_price?: number;
  discount_lower_price?: number;
  id: number | string;
  img: string;
  inventory?: number;
  marketing_price?: number;
  name: string;
  product_rate?: number;
  support_product_new_open?: boolean;
}

