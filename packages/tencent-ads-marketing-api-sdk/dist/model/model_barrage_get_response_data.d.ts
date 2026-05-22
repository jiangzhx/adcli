import type { BarrageGetListStruct, Conf } from "../model/index";
export interface BarrageGetResponseData {
    list?: BarrageGetListStruct[];
    page_info?: Conf;
}
