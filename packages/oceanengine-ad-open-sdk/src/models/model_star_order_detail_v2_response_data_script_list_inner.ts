// Generated from oceanengine/ad_open_sdk_go models/model_star_order_detail_v2_response_data_script_list_inner.go
// Do not edit manually.

import type { StarOrderDetailV2ResponseDataScriptListInnerDetailAuditInfoInner } from "../models/index";

export interface StarOrderDetailV2ResponseDataScriptListInner {
  audit_status?: number;
  create_time?: number;
  detail_audit_info?: StarOrderDetailV2ResponseDataScriptListInnerDetailAuditInfoInner[];
  resource_content?: string;
  resource_filename?: string;
  resource_id?: number | string;
  resource_title?: string;
  status?: number;
}

