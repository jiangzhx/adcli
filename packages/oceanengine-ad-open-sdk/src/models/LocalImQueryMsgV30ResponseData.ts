// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalImQueryMsgV30DataEventType } from "../models";

export interface LocalImQueryMsgV30ResponseData {
  content?: string;
  conversation_id: string;
  create_time: string;
  event_type: LocalImQueryMsgV30DataEventType;
  extra: Record<string, string>;
  log_id: string;
  msg_id: string;
  receive_adv_id?: number;
}

