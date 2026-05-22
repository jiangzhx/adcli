import type { PunishPageConf, PunishQueryListItem } from "../models";
export interface PunishmentQueryGetResponseData {
    list?: PunishQueryListItem[];
    page_conf?: PunishPageConf;
}
