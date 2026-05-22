// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_micro_applet_update_v3_0_request_schema_info_inner.go
// Do not edit manually.

import type { ToolsEbpMicroAppletUpdateV30SchemaInfoOperateType } from "../models/index";

export interface ToolsEbpMicroAppletUpdateV30RequestSchemaInfoInner {
  id?: number | string;
  link?: string;
  operate_type: ToolsEbpMicroAppletUpdateV30SchemaInfoOperateType;
  remark: string;
  start_page?: string;
  start_param?: string;
}

