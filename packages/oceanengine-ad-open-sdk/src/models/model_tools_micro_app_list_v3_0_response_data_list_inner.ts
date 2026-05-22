// Generated from oceanengine/ad_open_sdk_go models/model_tools_micro_app_list_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { ToolsMicroAppListV30DataListAccountType, ToolsMicroAppListV30DataListAuditStatus, ToolsMicroAppListV30DataListMaxPaymentTierRange, ToolsMicroAppListV30DataListMaxRechargeTier, ToolsMicroAppListV30DataListMembershipType, ToolsMicroAppListV30DataListMidPaymentTierRange, ToolsMicroAppListV30DataListMinPaymentTierRange, ToolsMicroAppListV30DataListMinRechargeTier, ToolsMicroAppListV30DataListPaymentForm, ToolsMicroAppListV30DataListRecommendedRechargeTier, ToolsMicroAppListV30DataListRevenueModel } from "../models/index";

export interface ToolsMicroAppListV30ResponseDataListInner {
  account_id?: number | string;
  account_type?: ToolsMicroAppListV30DataListAccountType;
  advertiser_id?: number | string;
  app_id?: string;
  audit_status?: ToolsMicroAppListV30DataListAuditStatus;
  create_time?: string;
  discount_rate?: number;
  has_discount?: boolean;
  has_online_earning?: boolean;
  instance_id?: number | string;
  is_ebp_asset?: boolean;
  max_payment_tier_range?: ToolsMicroAppListV30DataListMaxPaymentTierRange;
  max_recharge_tier?: ToolsMicroAppListV30DataListMaxRechargeTier;
  membership_type?: ToolsMicroAppListV30DataListMembershipType;
  mid_payment_tier_range?: ToolsMicroAppListV30DataListMidPaymentTierRange;
  min_payment_tier_range?: ToolsMicroAppListV30DataListMinPaymentTierRange;
  min_recharge_tier?: ToolsMicroAppListV30DataListMinRechargeTier;
  modify_time?: string;
  name?: string;
  payment_form?: ToolsMicroAppListV30DataListPaymentForm;
  prop_name?: string;
  reason?: string;
  recommended_recharge_tier?: ToolsMicroAppListV30DataListRecommendedRechargeTier;
  remark?: string;
  revenue_model?: ToolsMicroAppListV30DataListRevenueModel;
  tag_info?: string;
}

