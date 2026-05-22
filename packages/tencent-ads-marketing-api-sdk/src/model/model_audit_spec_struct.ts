// Generated from tencentad/marketing-api-go-sdk pkg/model/model_audit_spec_struct.go
// Do not edit manually.

import type { AdStatus, ElementRejectDetailInfo, SiteSetDefinition } from "../model/index";

export interface AuditSpecStruct {
  site_set?: SiteSetDefinition;
  system_status?: AdStatus;
  reject_message?: string;
  element_reject_detail_info?: ElementRejectDetailInfo[];
}

