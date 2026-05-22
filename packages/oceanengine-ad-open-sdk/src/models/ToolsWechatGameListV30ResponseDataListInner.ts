// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsWechatGameListV30DataListAccountType, ToolsWechatGameListV30DataListAgeLimit, ToolsWechatGameListV30DataListAuditStatus, ToolsWechatGameListV30DataListAuthorizationStatus, ToolsWechatGameListV30DataListHistoryAccountType, ToolsWechatGameListV30DataListMaxPaymentTierRange, ToolsWechatGameListV30DataListMidPaymentTierRange, ToolsWechatGameListV30DataListMinPaymentTierRange, ToolsWechatGameListV30DataListRevenueModel, ToolsWechatGameListV30DataListScheduleCards } from "../models";

export interface ToolsWechatGameListV30ResponseDataListInner {
  account_id?: number | string;
  account_type?: ToolsWechatGameListV30DataListAccountType;
  age_limit?: ToolsWechatGameListV30DataListAgeLimit;
  age_remind_url?: string;
  anti_addiction_url?: string;
  art_style?: string;
  audit_status?: ToolsWechatGameListV30DataListAuditStatus;
  authorization_status?: ToolsWechatGameListV30DataListAuthorizationStatus;
  create_time?: string;
  discount_rate?: number;
  feature_tags?: string[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  history_account_id?: number | string;
  history_account_type?: ToolsWechatGameListV30DataListHistoryAccountType;
  instance_id?: number | string;
  is_ebp_asset?: boolean;
  max_payment_tier_range?: ToolsWechatGameListV30DataListMaxPaymentTierRange;
  mid_payment_tier_range?: ToolsWechatGameListV30DataListMidPaymentTierRange;
  min_payment_tier_range?: ToolsWechatGameListV30DataListMinPaymentTierRange;
  name?: string;
  network_environment?: string[];
  path?: string;
  real_name_url?: string;
  reason?: string;
  reason_unauthorize?: string;
  revenue_model?: ToolsWechatGameListV30DataListRevenueModel;
  schedule_cards?: ToolsWechatGameListV30DataListScheduleCards[];
  screen_record_url?: string;
  tag_info?: string;
  theme_tag?: string;
  user_name?: string;
}

