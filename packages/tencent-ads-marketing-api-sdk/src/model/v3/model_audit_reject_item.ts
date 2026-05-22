// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_audit_reject_item.go
// Do not edit manually.

import type { AuditStatus } from "../v3/index";

export interface AuditRejectItem {
  feed_id?: number | string;
  product_id?: string;
  system_status?: AuditStatus;
  reject_message?: string;
}

