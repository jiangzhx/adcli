// Generated from oceanengine/ad_open_sdk_go models/model_clue_wechat_instance_update_v2_request.go
// Do not edit manually.

import type { ClueWechatInstanceUpdateV2Action } from "../models/index";

export interface ClueWechatInstanceUpdateV2Request {
  action: ClueWechatInstanceUpdateV2Action;
  advertiser_id: number | string;
  instance_id: number | string;
  wechat_list: string[];
}

