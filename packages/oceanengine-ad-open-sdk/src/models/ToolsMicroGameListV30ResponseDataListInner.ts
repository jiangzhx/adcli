// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsMicroGameListV30DataListAccountType, ToolsMicroGameListV30DataListAgeLimit, ToolsMicroGameListV30DataListAuditStatus, ToolsMicroGameListV30DataListMaxPaymentTierRange, ToolsMicroGameListV30DataListMidPaymentTierRange, ToolsMicroGameListV30DataListMinPaymentTierRange, ToolsMicroGameListV30DataListRevenueModel, ToolsMicroGameListV30DataListRevenueModelPoint, ToolsMicroGameListV30DataListScheduleCards } from "../models";

export interface ToolsMicroGameListV30ResponseDataListInner {
  account_id?: number | string;
  account_type?: ToolsMicroGameListV30DataListAccountType;
  advertiser_id?: number | string;
  age_limit?: ToolsMicroGameListV30DataListAgeLimit;
  app_id?: string;
  art_style?: string;
  audit_status?: ToolsMicroGameListV30DataListAuditStatus;
  create_time?: string;
  discount_rate?: number;
  feature_tags?: string[];
  has_discount?: boolean;
  has_online_earning?: boolean;
  instance_id?: number | string;
  introduction?: string;
  is_ebp_asset?: boolean;
  max_payment_tier_range?: ToolsMicroGameListV30DataListMaxPaymentTierRange;
  mid_payment_tier_range?: ToolsMicroGameListV30DataListMidPaymentTierRange;
  min_payment_tier_range?: ToolsMicroGameListV30DataListMinPaymentTierRange;
  modify_time?: string;
  name?: string;
  network_environment?: string[];
  reason?: string;
  remark?: string;
  revenue_model?: ToolsMicroGameListV30DataListRevenueModel;
  revenue_model_point?: ToolsMicroGameListV30DataListRevenueModelPoint;
  schedule_cards?: ToolsMicroGameListV30DataListScheduleCards[];
  tag_info?: string;
  theme_tag?: string;
}

