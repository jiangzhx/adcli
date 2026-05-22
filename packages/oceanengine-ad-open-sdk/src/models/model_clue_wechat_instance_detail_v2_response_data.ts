// Generated from oceanengine/ad_open_sdk_go models/model_clue_wechat_instance_detail_v2_response_data.go
// Do not edit manually.

import type { ClueWechatInstanceDetailV2DataSubType, ClueWechatInstanceDetailV2DataSuffix, ClueWechatInstanceDetailV2ResponseDataWechatListInner } from "../models/index";

export interface ClueWechatInstanceDetailV2ResponseData {
  create_time?: string;
  instance_id?: number | string;
  mod_time?: string;
  name?: string;
  sub_type?: ClueWechatInstanceDetailV2DataSubType;
  suffix?: ClueWechatInstanceDetailV2DataSuffix;
  wechat_list?: ClueWechatInstanceDetailV2ResponseDataWechatListInner[];
}

