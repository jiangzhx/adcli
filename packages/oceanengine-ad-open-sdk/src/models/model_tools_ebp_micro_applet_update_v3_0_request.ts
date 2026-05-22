// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_applet_update_v3_0_request.go
// Do not edit manually.

import type { ToolsEbpMicroAppletUpdateV30AccountType, ToolsEbpMicroAppletUpdateV30RequestSchemaInfoInner } from "../models/index";

export interface ToolsEbpMicroAppletUpdateV30Request {
  account_id: number | string;
  account_type: ToolsEbpMicroAppletUpdateV30AccountType;
  data: Record<string, string>;
  instance_id: number | string;
  remark?: string;
  schema_info: ToolsEbpMicroAppletUpdateV30RequestSchemaInfoInner[];
}

