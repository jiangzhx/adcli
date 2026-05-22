import type { PunishUidMetricsReqPageConf } from "../models";
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
