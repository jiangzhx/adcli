// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpAppExtendUpdateV30AccountType, ToolsEbpAppExtendUpdateV30Mode, ToolsEbpAppExtendUpdateV30RequestChannelInfoListInner } from "../models";

export interface ToolsEbpAppExtendUpdateV30Request {
  account_id: number;
  account_type: ToolsEbpAppExtendUpdateV30AccountType;
  channel_info_list?: ToolsEbpAppExtendUpdateV30RequestChannelInfoListInner[];
  mode: ToolsEbpAppExtendUpdateV30Mode;
  package_id: string;
}

