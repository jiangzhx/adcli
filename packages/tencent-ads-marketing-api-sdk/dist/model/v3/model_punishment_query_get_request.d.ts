import type { PunishPageConf } from "../v3/index";
export interface PunishmentQueryGetRequest {
    order_id_list?: string[];
    account_id_list?: number[];
    company_name?: string;
    industry_id_list?: number[];
    illegal_start_time?: number;
    illegal_end_time?: number;
    illegal_node_list?: string[];
    action_type_list?: number[];
    start_time?: number;
    end_time?: number;
    level_list?: number[];
    illegal_scene_list?: string[];
    page_conf?: PunishPageConf;
}
