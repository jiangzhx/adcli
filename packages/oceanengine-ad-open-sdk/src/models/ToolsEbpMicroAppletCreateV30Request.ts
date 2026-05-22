// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpMicroAppletCreateV30AccountType, ToolsEbpMicroAppletCreateV30RequestSchemaInfoInner } from "../models";

export interface ToolsEbpMicroAppletCreateV30Request {
  account_id: number;
  account_type: ToolsEbpMicroAppletCreateV30AccountType;
  app_id: string;
  data: Record<string, string>;
  remark: string;
  schema_info: ToolsEbpMicroAppletCreateV30RequestSchemaInfoInner[];
}

