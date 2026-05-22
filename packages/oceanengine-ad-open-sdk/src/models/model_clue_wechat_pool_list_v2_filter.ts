// Generated from oceanengine/ad_open_sdk_go models/model_clue_wechat_pool_list_v2_filter.go
// Do not edit manually.

import type { ClueWechatPoolListV2FilterAuditStatus } from "../models/index";

export interface ClueWechatPoolListV2Filter {
  audit_status?: ClueWechatPoolListV2FilterAuditStatus[];
  instance_id?: number | string;
  nick_name?: string;
  page?: number;
  page_size?: number;
  wechat_number?: string;
}

