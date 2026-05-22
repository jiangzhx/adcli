import type { PunishDetailDataItem, PunishDetailPageConf } from "../models";
export interface PunishDetailGetResponseData {
    data_list?: PunishDetailDataItem[];
    page_conf?: PunishDetailPageConf;
}
