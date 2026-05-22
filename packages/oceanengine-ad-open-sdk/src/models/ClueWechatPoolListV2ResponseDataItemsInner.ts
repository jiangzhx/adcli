// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueWechatPoolListV2DataItemsAuditStatus, ClueWechatPoolListV2DataItemsHasQrCode, ClueWechatPoolListV2DataItemsWechatType } from "../models";

export interface ClueWechatPoolListV2ResponseDataItemsInner {
  app_id?: string;
  audit_status?: ClueWechatPoolListV2DataItemsAuditStatus;
  clue_count?: number;
  create_time?: string;
  has_qr_code?: ClueWechatPoolListV2DataItemsHasQrCode;
  instance_count?: number;
  mod_time?: string;
  nick_name?: string;
  reject_reason?: string;
  status?: number;
  suffix?: string;
  wechat_number?: string;
  wechat_type?: ClueWechatPoolListV2DataItemsWechatType;
}

