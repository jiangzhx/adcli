import type { BarrageGetListStruct, Conf } from "../models";
export interface BarrageGetResponseData {
    list?: BarrageGetListStruct[];
    page_info?: Conf;
}
