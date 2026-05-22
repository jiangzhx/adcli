// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DouplusOrderListV30DataOrderListAdListAdStatus, DouplusOrderListV30DataOrderListAdListBidMode, DouplusOrderListV30ResponseDataOrderListInnerAdListInnerAudience } from "../models";

export interface DouplusOrderListV30ResponseDataOrderListInnerAdListInner {
  ad_id?: number;
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

