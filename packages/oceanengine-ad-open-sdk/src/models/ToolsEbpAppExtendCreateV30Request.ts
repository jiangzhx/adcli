// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsEbpAppExtendCreateV30AccountType, ToolsEbpAppExtendCreateV30Mode, ToolsEbpAppExtendCreateV30RequestChannelInfoListInner } from "../models";

export interface ToolsEbpAppExtendCreateV30Request {
  account_id: number;
  account_type: ToolsEbpAppExtendCreateV30AccountType;
  channel_count?: number;
  channel_info_list?: ToolsEbpAppExtendCreateV30RequestChannelInfoListInner[];
  mode: ToolsEbpAppExtendCreateV30Mode;
  package_id: string;
}

