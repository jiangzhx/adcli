// Generated from oceanengine/ad_open_sdk_go models/model_local_im_send_msg_v3_0_request.go
// Do not edit manually.

import type { LocalImSendMsgV30Scene, LocalImSendMsgV30SourceName } from "../models/index";

export interface LocalImSendMsgV30Request {
  content: string;
  conversation_id: string;
  local_account_id: number | string;
  scene: LocalImSendMsgV30Scene;
  source_name: LocalImSendMsgV30SourceName;
}

