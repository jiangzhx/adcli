// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarOrderGetVideoV2ResponseDataOrderVideoListInnerVideoListInnerDetailAuditInfoInner } from "../models";

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

