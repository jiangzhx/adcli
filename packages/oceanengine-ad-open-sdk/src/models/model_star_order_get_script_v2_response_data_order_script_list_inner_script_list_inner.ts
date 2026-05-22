// Generated from oceanengine/ad_open_sdk_go models/model_star_order_get_script_v2_response_data_order_script_list_inner_script_list_inner.go
// Do not edit manually.

import type { StarOrderGetScriptV2ResponseDataOrderScriptListInnerScriptListInnerDetailAuditInfoInner } from "../models/index";

export interface StarOrderGetScriptV2ResponseDataOrderScriptListInnerScriptListInner {
  audit_status?: number;
  create_time?: number;
  detail_audit_info?: StarOrderGetScriptV2ResponseDataOrderScriptListInnerScriptListInnerDetailAuditInfoInner[];
  resource_filename?: string;
  resource_id?: number | string;
  resource_url?: string;
  status?: number;
}

