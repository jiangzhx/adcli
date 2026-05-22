// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_applet_list_v3_0_response_data_applets_inner.go
// Do not edit manually.

import type { ToolsEbpMicroAppletListV30DataAppletsAuditStatus } from "../models/index";

export interface ToolsEbpMicroAppletListV30ResponseDataAppletsInner {
  app_id?: string;
  audit_status?: ToolsEbpMicroAppletListV30DataAppletsAuditStatus;
  data?: Record<string, string>;
  instance_id?: number | string;
  is_ebp_asset?: boolean;
  name?: string;
  reason?: string;
  remark?: string;
}

