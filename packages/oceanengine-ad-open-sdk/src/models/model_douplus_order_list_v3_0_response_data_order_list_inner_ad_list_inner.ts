// Generated from oceanengine/ad_open_sdk_go models/model_douplus_order_list_v3_0_response_data_order_list_inner_ad_list_inner.go
// Do not edit manually.

import type { DouplusOrderListV30DataOrderListAdListAdStatus, DouplusOrderListV30DataOrderListAdListBidMode, DouplusOrderListV30ResponseDataOrderListInnerAdListInnerAudience } from "../models/index";

export interface DouplusOrderListV30ResponseDataOrderListInnerAdListInner {
  ad_id?: number | string;
  ad_status?: DouplusOrderListV30DataOrderListAdListAdStatus;
  audience?: DouplusOrderListV30ResponseDataOrderListInnerAdListInnerAudience;
  bid_mode?: DouplusOrderListV30DataOrderListAdListBidMode;
  budget?: number;
  cpa_bid?: number;
  delivery_time?: number;
  external_action?: number;
  external_action_text?: string;
  is_fans?: boolean;
}

