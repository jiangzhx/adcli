import type { Conf, LocalStoresGetListStruct } from "../models";
export interface LocalStoresGetResponseData {
    list?: LocalStoresGetListStruct[];
    page_info?: Conf;
}
