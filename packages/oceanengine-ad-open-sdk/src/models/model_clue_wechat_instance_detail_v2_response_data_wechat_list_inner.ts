// Generated from oceanengine/ad_open_sdk_go models/model_clue_wechat_instance_detail_v2_response_data_wechat_list_inner.go
// Do not edit manually.

import type { ClueWechatInstanceDetailV2DataWechatListHasQrCode, ClueWechatInstanceDetailV2DataWechatListWechatType } from "../models/index";

export interface ClueWechatInstanceDetailV2ResponseDataWechatListInner {
  app_id?: string;
  clue_count?: number;
  create_time?: string;
  has_qr_code?: ClueWechatInstanceDetailV2DataWechatListHasQrCode;
  instance_clue_count?: number;
  mod_time?: string;
  nick_name?: string;
  status?: number;
  suffix?: string;
  wechat_type?: ClueWechatInstanceDetailV2DataWechatListWechatType;
}

