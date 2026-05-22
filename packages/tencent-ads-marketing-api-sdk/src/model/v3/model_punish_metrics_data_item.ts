// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_punish_metrics_data_item.go
// Do not edit manually.

export interface PunishMetricsDataItem {
  partition_time?: number;
  ops_advertiser_name?: string;
  zc_agent_group?: string;
  first_level_industry_name?: string;
  second_level_industry_name?: string;
  is_penalized?: number;
  penalty_review_total?: number;
  penalty_review_reject_cnt?: number;
  penalty_reject_rate?: string;
  penalty_unit_price?: string;
  penalty_amount?: string;
  penalty_uid_cnt?: number;
  capped_reject_cnt?: number;
  final_penalty_amount?: string;
}

