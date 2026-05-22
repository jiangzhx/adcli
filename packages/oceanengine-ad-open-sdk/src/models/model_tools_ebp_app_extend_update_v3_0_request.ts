// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_app_extend_update_v3_0_request.go
// Do not edit manually.

import type { ToolsEbpAppExtendUpdateV30AccountType, ToolsEbpAppExtendUpdateV30Mode, ToolsEbpAppExtendUpdateV30RequestChannelInfoListInner } from "../models/index";

export interface ToolsEbpAppExtendUpdateV30Request {
  account_id: number | string;
  account_type: ToolsEbpAppExtendUpdateV30AccountType;
  channel_info_list?: ToolsEbpAppExtendUpdateV30RequestChannelInfoListInner[];
  mode: ToolsEbpAppExtendUpdateV30Mode;
  package_id: string;
}

