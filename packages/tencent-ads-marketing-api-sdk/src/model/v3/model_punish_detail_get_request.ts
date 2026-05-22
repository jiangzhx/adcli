// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_punish_detail_get_request.go
// Do not edit manually.

export interface PunishDetailGetRequest {
  partition_time?: number;
  start_partition_time?: number;
  end_partition_time?: number;
  account_id?: number | string;
  agency_uid_list?: string[];
  ops_advertiser_name_list?: string[];
  zc_agent_group?: string;
  first_level_industry_name?: string;
  second_level_industry_name?: string;
  adgroup_id_list?: number[];
  dynamic_creative_id_list?: number[];
  component_id_list?: number[];
  element_type?: string;
  is_element_appeal?: number;
  agency_name_list?: string[];
  physical_finger_list?: string[];
  reject_reason?: string;
  review_begin_time?: string;
  review_end_time?: string;
  query_account_id_list?: number[];
  page_num?: number;
  page_size?: number;
  account_operate_identity_list?: string[];
  compliance_owner_list?: string[];
}

