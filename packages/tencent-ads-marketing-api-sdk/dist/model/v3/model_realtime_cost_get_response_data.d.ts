import type { Conf, RealtimeCostGetListStruct } from "../v3/index";
export interface RealtimeCostGetResponseData {
    list?: RealtimeCostGetListStruct[];
    page_info?: Conf;
}
