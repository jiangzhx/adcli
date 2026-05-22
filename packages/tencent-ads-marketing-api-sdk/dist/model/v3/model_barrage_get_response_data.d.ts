import type { BarrageGetListStruct, Conf } from "../v3/index";
export interface BarrageGetResponseData {
    list?: BarrageGetListStruct[];
    page_info?: Conf;
}
