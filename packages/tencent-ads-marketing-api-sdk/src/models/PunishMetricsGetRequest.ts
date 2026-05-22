// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export interface PunishMetricsGetRequest {
  partition_time?: number;
  start_partition_time?: number;
  end_partition_time?: number;
  account_id?: number | string;
  ops_advertiser_name_list?: string[];
  zc_agent_group?: string;
  first_level_industry_name?: string;
  second_level_industry_name?: string;
  page_num?: number;
  page_size?: number;
}

