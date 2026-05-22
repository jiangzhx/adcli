// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdDetailGetV10DataProductInfoChannelType } from "../models";

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

