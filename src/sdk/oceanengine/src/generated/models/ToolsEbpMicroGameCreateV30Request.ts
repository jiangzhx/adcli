// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpMicroGameCreateV30AccountType, ToolsEbpMicroGameCreateV30RequestSchemaInfoInner } from "../models";

export interface ToolsEbpMicroGameCreateV30Request {
  account_id: number;
  account_type: ToolsEbpMicroGameCreateV30AccountType;
  app_id: string;
  data?: Record<string, string>;
  remark: string;
  schema_info: ToolsEbpMicroGameCreateV30RequestSchemaInfoInner[];
}

