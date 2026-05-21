// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsAwemeAuthV2AuthType } from "../models";

export interface ToolsAwemeAuthV2Request {
  advertiser_id: number;
  auth_type: ToolsAwemeAuthV2AuthType;
  aweme_id: string;
  code: string;
  end_time: string;
  item_url?: string;
  note?: string;
  start_time: string;
}

