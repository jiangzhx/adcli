// Generated from oceanengine/ad_open_sdk_go models/model_star_order_get_video_v2_response_data_order_video_list_inner_video_list_inner.go
// Do not edit manually.

import type { StarOrderGetVideoV2ResponseDataOrderVideoListInnerVideoListInnerDetailAuditInfoInner } from "../models/index";

export interface StarOrderGetVideoV2ResponseDataOrderVideoListInnerVideoListInner {
  audit_status?: number;
  cover_url?: string;
  create_time?: number;
  detail_audit_info?: StarOrderGetVideoV2ResponseDataOrderVideoListInnerVideoListInnerDetailAuditInfoInner[];
  duration?: number;
  item_id?: number | string;
  online_status?: number;
  resource_id?: number | string;
  resource_url?: string;
  status?: number;
  title?: string;
}

