import type { PunishPageConf, PunishQueryListItem } from "../v3/index";
export interface PunishmentQueryGetResponseData {
    list?: PunishQueryListItem[];
    page_conf?: PunishPageConf;
}
