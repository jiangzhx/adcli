// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_game_update_v3_0_request.go
// Do not edit manually.

import type { ToolsEbpMicroGameUpdateV30AccountType, ToolsEbpMicroGameUpdateV30RequestSchemaInfoInner } from "../models/index";

export interface ToolsEbpMicroGameUpdateV30Request {
  account_id: number | string;
  account_type: ToolsEbpMicroGameUpdateV30AccountType;
  data?: Record<string, string>;
  instance_id: number | string;
  remark?: string;
  schema_info?: ToolsEbpMicroGameUpdateV30RequestSchemaInfoInner[];
}

