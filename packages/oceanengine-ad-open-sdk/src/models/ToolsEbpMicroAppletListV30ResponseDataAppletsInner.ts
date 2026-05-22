// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpMicroAppletListV30DataAppletsAuditStatus } from "../models";

export interface ToolsEbpMicroAppletListV30ResponseDataAppletsInner {
  app_id?: string;
  audit_status?: ToolsEbpMicroAppletListV30DataAppletsAuditStatus;
  data?: Record<string, string>;
  instance_id?: number;
  is_ebp_asset?: boolean;
  name?: string;
  reason?: string;
  remark?: string;
}

