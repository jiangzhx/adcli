import type { PunishMetricsDataItem, PunishMetricsPageConf } from "../models";
export interface PunishMetricsGetResponseData {
    data_list?: PunishMetricsDataItem[];
    page_conf?: PunishMetricsPageConf;
}
