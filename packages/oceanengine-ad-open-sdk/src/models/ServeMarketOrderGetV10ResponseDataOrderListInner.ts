// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ServeMarketOrderGetV10DataOrderListOrderStatus, ServeMarketOrderGetV10DataOrderListSkuType, ServeMarketOrderGetV10ResponseDataOrderListInnerFunction, ServeMarketOrderGetV10ResponseDataOrderListInnerSpecsInner } from "../models";

export interface ServeMarketOrderGetV10ResponseDataOrderListInner {
  app_active_days?: number;
  app_available_user_ids?: number[];
  app_limit_user_count?: number;
  begin_time?: number;
  create_time?: number;
  end_time?: number;
  fee?: number;
  function?: ServeMarketOrderGetV10ResponseDataOrderListInnerFunction;
  is_func?: boolean;
  order_id?: number;
  order_status?: ServeMarketOrderGetV10DataOrderListOrderStatus;
  origin_price?: number;
  paid_user_id?: number;
  pay_time?: number;
  sku_description?: string;
  sku_id?: number;
  sku_type?: ServeMarketOrderGetV10DataOrderListSkuType;
  specs?: ServeMarketOrderGetV10ResponseDataOrderListInnerSpecsInner[];
}

