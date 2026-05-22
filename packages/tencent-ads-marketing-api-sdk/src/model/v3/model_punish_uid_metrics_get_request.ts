// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_punish_uid_metrics_get_request.go
// Do not edit manually.

import type { PunishUidMetricsReqPageConf } from "../v3/index";

export interface PunishUidMetricsGetRequest {
  partition_time?: number;
  start_partition_time?: number;
  end_partition_time?: number;
  account_id?: number | string;
  ops_advertiser_name_list?: string[];
  zc_agent_group?: string;
  first_level_industry_name?: string;
  second_level_industry_name?: string;
  query_account_id_list?: number[];
  page_conf?: PunishUidMetricsReqPageConf;
  account_operate_identity_list?: string[];
  compliance_owner_list?: string[];
}

