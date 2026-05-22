import type { Conf, LocalStoresGetListStruct } from "../model/index";
export interface LocalStoresGetResponseData {
    list?: LocalStoresGetListStruct[];
    page_info?: Conf;
}
