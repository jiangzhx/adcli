import type { Conf, RealtimeCostGetListStruct } from "../models";
export interface RealtimeCostGetResponseData {
    list?: RealtimeCostGetListStruct[];
    page_info?: Conf;
}
