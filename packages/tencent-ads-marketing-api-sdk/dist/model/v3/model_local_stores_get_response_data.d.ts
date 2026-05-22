import type { Conf, LocalStoresGetListStruct } from "../v3/index";
export interface LocalStoresGetResponseData {
    list?: LocalStoresGetListStruct[];
    page_info?: Conf;
}
