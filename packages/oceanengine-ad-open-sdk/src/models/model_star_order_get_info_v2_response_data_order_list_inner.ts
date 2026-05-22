// Generated from oceanengine/ad_open_sdk_go models/model_star_order_get_info_v2_response_data_order_list_inner.go
// Do not edit manually.

import type { StarOrderGetInfoV2ResponseDataOrderListInnerAuthorInfo, StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfo, StarOrderGetInfoV2ResponseDataOrderListInnerOrderItemInfo, StarOrderGetInfoV2ResponseDataOrderListInnerPaymentInfo } from "../models/index";

export interface StarOrderGetInfoV2ResponseDataOrderListInner {
  audit_status?: number;
  author_cancel_reason?: string;
  author_cancel_status?: number;
  author_info?: StarOrderGetInfoV2ResponseDataOrderListInnerAuthorInfo;
  component_click_monitor_url?: string;
  create_time?: number;
  demand_info?: StarOrderGetInfoV2ResponseDataOrderListInnerDemandInfo;
  finish_time?: number;
  item_show_monitor_url?: string;
  order_id?: number | string;
  order_item_info?: StarOrderGetInfoV2ResponseDataOrderListInnerOrderItemInfo;
  payment_info?: StarOrderGetInfoV2ResponseDataOrderListInnerPaymentInfo;
  release_time?: number;
  status?: number;
}

