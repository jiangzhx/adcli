// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsPreAuditGetV2DataListMaterialType, ToolsPreAuditGetV2DataListStatus } from "../models";

export interface ToolsPreAuditGetV2ResponseDataListInner {
  content?: string;
  material_type?: ToolsPreAuditGetV2DataListMaterialType;
  pre_audit_id?: number;
  reject_reason?: string;
  status?: ToolsPreAuditGetV2DataListStatus;
}

