// Generated from oceanengine/ad_open_sdk_go models/model_star_order_detail_v2_response_data_video_list_inner.go
// Do not edit manually.

import type { StarOrderDetailV2ResponseDataVideoListInnerDetailAuditInfoInner } from "../models/index";

export interface StarOrderDetailV2ResponseDataVideoListInner {
  audit_status?: number;
  cover_url?: string;
  create_time?: number;
  detail_audit_info?: StarOrderDetailV2ResponseDataVideoListInnerDetailAuditInfoInner[];
  duration?: number;
  item_id?: number | string;
  resource_id?: number | string;
  resource_url?: string;
  status?: number;
}

