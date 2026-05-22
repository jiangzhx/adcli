import type { Conf, RealtimeCostGetListStruct } from "../model/index";
export interface RealtimeCostGetResponseData {
    list?: RealtimeCostGetListStruct[];
    page_info?: Conf;
}
