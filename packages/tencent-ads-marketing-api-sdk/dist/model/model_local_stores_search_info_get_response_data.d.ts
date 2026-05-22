import type { Conf, LocalStoresSearchInfoGetListStruct } from "../model/index";
export interface LocalStoresSearchInfoGetResponseData {
    list?: LocalStoresSearchInfoGetListStruct[];
    page_info?: Conf;
}
