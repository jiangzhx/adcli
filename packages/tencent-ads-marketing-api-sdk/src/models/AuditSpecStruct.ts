// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { AdStatus, ElementRejectDetailInfo, SiteSetDefinition } from "../models";

export interface AuditSpecStruct {
  site_set?: SiteSetDefinition;
  system_status?: AdStatus;
  reject_message?: string;
  element_reject_detail_info?: ElementRejectDetailInfo[];
}

