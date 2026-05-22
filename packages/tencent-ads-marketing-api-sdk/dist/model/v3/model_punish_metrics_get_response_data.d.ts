import type { PunishMetricsDataItem, PunishMetricsPageConf } from "../v3/index";
export interface PunishMetricsGetResponseData {
    data_list?: PunishMetricsDataItem[];
    page_conf?: PunishMetricsPageConf;
}
