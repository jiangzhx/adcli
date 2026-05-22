// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdGetV10DataListProductInfoChannelType } from "../models";

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

