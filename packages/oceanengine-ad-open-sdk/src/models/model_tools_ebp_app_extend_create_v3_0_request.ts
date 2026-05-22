// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_app_extend_create_v3_0_request.go
// Do not edit manually.

import type { ToolsEbpAppExtendCreateV30AccountType, ToolsEbpAppExtendCreateV30Mode, ToolsEbpAppExtendCreateV30RequestChannelInfoListInner } from "../models/index";

export interface ToolsEbpAppExtendCreateV30Request {
  account_id: number | string;
  account_type: ToolsEbpAppExtendCreateV30AccountType;
  channel_count?: number;
  channel_info_list?: ToolsEbpAppExtendCreateV30RequestChannelInfoListInner[];
  mode: ToolsEbpAppExtendCreateV30Mode;
  package_id: string;
}

