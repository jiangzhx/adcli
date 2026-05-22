// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpMicroGameListV30DataAppletsAuditStatus } from "../models";

export interface ToolsEbpMicroGameListV30ResponseDataAppletsInner {
  app_id?: string;
  audit_status?: ToolsEbpMicroGameListV30DataAppletsAuditStatus;
  data?: Record<string, string>;
  instance_id?: number;
  is_ebp_asset?: boolean;
  name?: string;
  reason?: string;
  remark?: string;
}

