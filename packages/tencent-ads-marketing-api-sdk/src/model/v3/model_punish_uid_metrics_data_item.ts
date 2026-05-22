// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_punish_uid_metrics_data_item.go
// Do not edit manually.

export interface PunishUidMetricsDataItem {
  partition_time?: number;
  ops_advertiser_name?: string;
  zc_agent_group?: string;
  first_level_industry_name?: string;
  second_level_industry_name?: string;
  account_id?: number | string;
  is_penalized?: number;
  penalty_review_total?: number;
  penalty_review_reject_cnt?: number;
  penalty_reject_rate?: string;
  uid_capped_reject_cnt?: number;
  penalty_unit_price?: string;
  uid_final_penalty_amount?: string;
  account_operate_identity?: string;
  compliance_owner?: string;
}

