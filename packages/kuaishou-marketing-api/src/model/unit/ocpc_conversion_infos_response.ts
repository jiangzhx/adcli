// Generated from github.com/bububa/kwai-marketing-api/model/unit/ocpc_conversion_infos_response.go
// Do not edit manually.

export interface OcpcConversionInfosResponse {
  is_activate?: number;
  is_form_submit?: number;
  is_credit_grant?: number;
  is_purchase?: number;
  is_wan_jian?: number;
  is_valid_clue?: number;
  is_firstday_roi?: number;
  is_register?: number;
  is_order_submit?: number;
  is_add_wechat?: number;
  is_app_invoked?: number;
  is_multi_conversion?: number;
  is_ad_watch_times?: number;
  is_order_paid?: number;
  is_seven_day_roi?: number;
  is_key_action?: number;
  deep_conversion_types?: DeepConversionType[];
}

export interface DeepConversionType {
  desc?: string;
  deep_conversion_type?: number;
}
