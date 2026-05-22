// Generated from oceanengine/ad_open_sdk_go models/model_tools_pre_audit_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { ToolsPreAuditGetV2DataListMaterialType, ToolsPreAuditGetV2DataListStatus } from "../models/index";

export interface ToolsPreAuditGetV2ResponseDataListInner {
  content?: string;
  material_type?: ToolsPreAuditGetV2DataListMaterialType;
  pre_audit_id?: number | string;
  reject_reason?: string;
  status?: ToolsPreAuditGetV2DataListStatus;
}

