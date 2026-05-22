// Generated from oceanengine/ad_open_sdk_go models/model_tools_clue_private_message_callback_v2_request.go
// Do not edit manually.

import type { ToolsCluePrivateMessageCallbackV2RequestAdinfo, ToolsCluePrivateMessageCallbackV2RequestClueConvertInfo, ToolsCluePrivateMessageCallbackV2RequestClueData, ToolsCluePrivateMessageCallbackV2RequestMsgInfo } from "../models/index";

export interface ToolsCluePrivateMessageCallbackV2Request {
  adinfo?: ToolsCluePrivateMessageCallbackV2RequestAdinfo;
  advertiser_id: number | string;
  b_open_id: string;
  c_open_id: string;
  client_key: string;
  clue_convert_info: ToolsCluePrivateMessageCallbackV2RequestClueConvertInfo;
  clue_data: ToolsCluePrivateMessageCallbackV2RequestClueData;
  event_timestamp?: number;
  feige_root_life_account_id?: number | string;
  feige_user_id?: string;
  msg_info?: ToolsCluePrivateMessageCallbackV2RequestMsgInfo;
  source_type?: number;
}

