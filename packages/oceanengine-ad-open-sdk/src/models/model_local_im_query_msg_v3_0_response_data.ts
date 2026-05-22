// Generated from oceanengine/ad_open_sdk_go models/model_local_im_query_msg_v3_0_response_data.go
// Do not edit manually.

import type { LocalImQueryMsgV30DataEventType } from "../models/index";

export interface LocalImQueryMsgV30ResponseData {
  content?: string;
  conversation_id: string;
  create_time: string;
  event_type: LocalImQueryMsgV30DataEventType;
  extra: Record<string, string>;
  log_id: string;
  msg_id: string;
  receive_adv_id?: number | string;
}

