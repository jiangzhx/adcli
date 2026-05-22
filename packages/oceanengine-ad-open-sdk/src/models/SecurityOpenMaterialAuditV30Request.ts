// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SecurityOpenMaterialAuditV30BusinessType, SecurityOpenMaterialAuditV30MsgType, SecurityOpenMaterialAuditV30Type } from "../models";

export interface SecurityOpenMaterialAuditV30Request {
  account_id: number | string;
  business_type: SecurityOpenMaterialAuditV30BusinessType;
  data: string;
  msg_type: SecurityOpenMaterialAuditV30MsgType;
  object_id?: number | string;
  product_id?: number | string;
  type: SecurityOpenMaterialAuditV30Type;
}

