// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpMicroGameUpdateV30AccountType, ToolsEbpMicroGameUpdateV30RequestSchemaInfoInner } from "../models";

export interface ToolsEbpMicroGameUpdateV30Request {
  account_id: number;
  account_type: ToolsEbpMicroGameUpdateV30AccountType;
  data?: Record<string, string>;
  instance_id: number;
  remark?: string;
  schema_info?: ToolsEbpMicroGameUpdateV30RequestSchemaInfoInner[];
}

