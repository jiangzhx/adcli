import type { Conf, LocalStoresSearchInfoGetListStruct } from "../v3/index";
export interface LocalStoresSearchInfoGetResponseData {
    list?: LocalStoresSearchInfoGetListStruct[];
    page_info?: Conf;
}
