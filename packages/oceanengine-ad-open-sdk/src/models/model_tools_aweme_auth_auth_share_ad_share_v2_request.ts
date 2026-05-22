// Generated from oceanengine/ad_open_sdk_go models/model_tools_aweme_auth_auth_share_ad_share_v2_request.go
// Do not edit manually.

import type { ToolsAwemeAuthAuthShareAdShareV2AuthType } from "../models/index";

export interface ToolsAwemeAuthAuthShareAdShareV2Request {
  advertiser_id: number | string;
  advertiser_ids: number | string[];
  auth_type: ToolsAwemeAuthAuthShareAdShareV2AuthType;
  aweme_id?: string;
  item_id?: number | string;
}

